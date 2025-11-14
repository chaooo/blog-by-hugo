---
title: 「学习笔记」Golang -- 读写数据
date: 2023-07-30 15:50:15
tags: [Golang编程, 学习笔记]
categories: [Golang编程]
series: Golang编程
toc: true
---

## 读和写
`Golang`中，`io`包提供了用于读和写的接口`io.Reader`和`io.Writer`：
```go
type Reader interface {
    Read(p []byte) (n int, err error)
}
type Writer interface {
    Write(p []byte) (n int, err error)
}
```
只要类型实现了读写接口，提供`Read()`和`Write()`方法，就可以读写数据。
```go
package main
import (
    "bufio"
    "fmt"
    "os"
)
func main() {
    // unbuffered：未实现接口 
    fmt.Fprintf(os.Stdout, "%s\n", "hello world! - unbuffered")
    // buffered: 实现了接口
    buf := bufio.NewWriter(os.Stdout) // os.Stdout 实现了 io.Writer 接口
    fmt.Fprintf(buf, "%s\n", "hello world! - buffered")
    buf.Flush()
}
```

- 使用`fmt`包提供的`Scan`和`Sscan`开头的函数，可以从键盘和标准输入`os.Stdin`读取输入。
- `io`包里的`Readers`和`Writers`都是不带缓冲的，`bufio`包里提供了对应的带缓冲的操作，在读写`UTF-8`编码的文本文件时它们尤其有用。
```go
inputReader := bufio.NewReader(os.Stdin)
input, err := inputReader.ReadString('\n')
```

## 文件读写
在 Go 语言中，文件使用指向 os.File 类型的指针来表示的，也叫做文件句柄。
### 读文件
```go
package main
import (
    "bufio"
    "fmt"
    "io"
    "os"
)
func main() {
    inputFile, inputError := os.Open("input.dat") // inputFile 是 *os.File 类型的，只读模式打开 input.dat 文件
    if inputError != nil {
        fmt.Printf("An error occurred on opening the inputfile\n")
        return
    }
    defer inputFile.Close() // 确保在程序退出前关闭该文件
    inputReader := bufio.NewReader(inputFile) // 使用 bufio 包提供的读取器
    for { // 无限循环
        inputString, readerError := inputReader.ReadString('\n') // 将文件的内容逐行（行结束符 '\n'）读取出来
        fmt.Printf("The input was: %s", inputString)
        if readerError == io.EOF { // 读取到文件末尾，退出循环
            return
        }      
    }
}
```

使用`io/ioutil`包里的`ioutil.ReadFile()`方法，可以**将整个文件的内容读到一个字符串里**：
```go
package main
import (
    "fmt"
    "io/ioutil"
    "os"
)
func main() {
    inputFile := "products.txt"
    outputFile := "products_copy.txt"
    buf, err := ioutil.ReadFile(inputFile) // 返回值类型: []byte, err
    if err != nil {
        fmt.Fprintf(os.Stderr, "File Error: %s\n", err)
	}
    fmt.Printf("%s\n", string(buf))
    err = ioutil.WriteFile(outputFile, buf, 0644) // oct, not hex
    if err != nil {
        panic(err.Error())
    }
}
```

可以使用`bufio.Reader`的`Read()`读取二进制文件。
```go
buf := make([]byte, 1024)
...
n, err := inputReader.Read(buf)
if (n == 0) { break}
```
`compress`包提供了读取压缩文件的功能，支持的压缩文件格式为：`bzip2`、`flate`、`gzip`、`lzw`和`zlib`。


### 写文件
```go
package main
import (
    "os"
    "bufio"
    "fmt"
)
func main () {
    outputFile, outputError := os.OpenFile("output.dat", os.O_WRONLY|os.O_CREATE, 0666)// ①以只写模式打开文件 output.dat，如果文件不存在则自动创建
    if outputError != nil {
        fmt.Printf("An error occurred with file opening or creation\n")
        return  
    }
    defer outputFile.Close() // 确保在程序退出前关闭该文件

    outputWriter := bufio.NewWriter(outputFile) // ②创建一个写入器（缓冲区）对象
    outputString := "hello world!\n"

    for i:=0; i<10; i++ {
        outputWriter.WriteString(outputString) // ③循环将字符串写入缓冲区
    }
    outputWriter.Flush() // ④将缓存的文件真正写入到文件中
}
```
- `os.OpenFile(文件名，标志，权限）`参数中的标志（使用逻辑运算符 “|” 连接）：
    + `os.O_RDONLY`：只读
    + `os.O_WRONLY`：只写
    + `os.O_CREATE`：创建：如果指定文件不存在，就创建该文件。
    + `os.O_TRUNC`：截断：如果指定文件已存在，就将该文件的长度截为 0。

### 拷贝文件
```go
package main
import (
    "fmt"
    "io"
    "os"
)
func CopyFile(dstName, srcName string) (written int64, err error) {
    src, err := os.Open(srcName) // ①只读模式打开 srcName 文件
    if err != nil {
        return
    }
    defer src.Close()

    dst, err := os.OpenFile(dstName, os.O_WRONLY|os.O_CREATE, 0644) // ②以只写模式打开文件dstName，如果文件不存在则自动创建
    if err != nil {
        return
    }
    defer dst.Close()

    return io.Copy(dst, src) // ③将src 拷贝到 dst
}
func main() {
  CopyFile("target.txt", "source.txt")
  fmt.Println("Copy done!")
}
```

## 编码和解码（或 序列化与反序列化）
- 数据结构要在网络中传输或保存到文件，就必须对其编码和解码；目前存在很多编码格式：`JSON`，`XML`，`gob`，`Google`缓冲协议等等。
- 编码是输出一个数据流（实现了`io.Writer`接口）；解码是从一个数据流（实现了`io.Reader`）输出到一个数据结构。
### json 包
`Golang`的 `json` 包可以让你在程序中方便的读取和写入`JSON`数据。
```go
// json.go
package main
import (
    "encoding/json"
    "fmt"
    "log"
    "os"
)
type Address struct {
    Type    string
    City    string
    Country string
}
type Person struct {
    FirstName string
    LastName  string
    Addresses []*Address
    Remark    string
}
func main() {
    pa := &Address{"private", "Aartselaar", "Belgium"}
    wa := &Address{"work", "Boom", "Belgium"}
    vc := Person{"Jan", "Kersschot", []*Address{pa, wa}, "none"}

    js, _ := json.Marshal(vc) // JSON format
    fmt.Printf("JSON format: %s", js)

    file, _ := os.OpenFile("person.json", os.O_CREATE|os.O_WRONLY, 0666) // Using an encoder
    defer file.Close()
    enc := json.NewEncoder(file)
    err := enc.Encode(vc)
    if err != nil {
        log.Println("Error in encoding json")
    }
}
```
- `json.Marshal()`序列化的函数签名是`func Marshal(v interface{}) ([]byte, error)`：把数据结构编码为`JSON`。
- 数据编码后的`JSON`文本（实际上是一个`[]byte`）：
```json
{
    "FirstName": "Jan",
    "LastName": "Kersschot",
    "Addresses": [{
        "Type": "private",
        "City": "Aartselaar",
        "Country": "Belgium"
    }, {
        "Type": "work",
        "City": "Boom",
        "Country": "Belgium"
    }],
    "Remark": "none"
}
```
- `JSON` 与 `Go` 类型对应如下：
    + `bool` 对应 JSON 的 `booleans`
    + `float64` 对应 JSON 的 `numbers`
    + `string` 对应 JSON 的 `strings`
    + `nil` 对应 JSON 的 `null`
- `json.UnMarshal()`反序列化的函数签名是`func Unmarshal(data []byte, v interface{}) error`：把`JSON`解码为数据结构。
```go
b := []byte(`{"Name": "Wednesday", "Age": 6, "Parents": ["Gomez", "Morticia"]}`)
var f interface{}
err := json.Unmarshal(b, &f)
```


## 用 Gob 传输数据
`Gob`（即`Go binary`的缩写）是`Golang`自己的以二进制形式序列化和反序列化程序数据的格式；可以在`encoding`包中找到。通常用于`RPC`调用参数和结果的传输，以及应用程序和机器之间的数据传输。

`Gob`文件或流是完全自描述的：里面包含的所有类型都有一个对应的描述，并且总是可以用`Go`解码，而不需要了解文件的内容。
```go
package main
import (
  "encoding/gob"
  "log"
  "os"
)
type Address struct {
  Type             string
  City             string
  Country          string
}
type Person struct {
  FirstName   string
  LastName    string
  Addresses   []*Address
  Remark      string
}
func main() {
  pa := &Address{"private", "Aartselaar","Belgium"}
  wa := &Address{"work", "Boom", "Belgium"}
  vc := Person{"Jan", "Kersschot", []*Address{pa,wa}, "none"}
  file, _ := os.OpenFile("person.gob", os.O_CREATE|os.O_WRONLY, 0666)
  defer file.Close()
  enc := gob.NewEncoder(file)
  err := enc.Encode(vc)
  if err != nil {
    log.Println("Error in encoding gob")
  }
}
```
和`JSON`的使用方式一样，`Gob`使用通用的`io.Writer`接口，通过`NewEncoder()`函数创建`Encoder`对象并调用`Encode()`；
相反的过程使用通用的`io.Reader`接口，通过`NewDecoder()`函数创建`Decoder`对象并调用`Decode`。

> 通过网络传输的数据必须加密，以防止被读取或篡改，并且保证发出的数据和收到的数据检验和一致。`Go`的标准库为此提供了超过`30`个的包：
> - `hash` 包：实现了 `adler32`、`crc32`、`crc64` 和 `fnv` 校验；
> - `crypto` 包：实现了其它的 `hash` 算法，比如 `md4`、`md5`、`sha1` 等。以及完整地实现了 `aes`、`blowfish`、`rc4`、`rsa`、`xtea` 等加密算法。

