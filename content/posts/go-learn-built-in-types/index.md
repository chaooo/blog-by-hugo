---
title: Golang -- 内置数据类型
date: 2023-07-23 15:45:40
tags: [Go, 后端开发]
categories: [Golang]
series: Golang入门
toc: true
---

## 一、指针类型（Pointer）
`Golang`的取地址符是`&`，放到一个变量前使用就会返回相应变量的内存地址。 一个指针变量指向了一个值的内存地址。
```go
var a int = 10
var intP *int = &a //声明一个指针变量intP，并存储变量a的内存地址
```

- 指针使用流程：①声明指针变量。②为指针变量赋值。③访问指针变量中指向地址的值。
- 在指针类型前面加上`*`号（前缀）来获取指针所指向的内容。
```go
package main
import "fmt"
func main() {
   var a int= 20   /* 声明变量 */
   var ip *int     /* ①声明指针变量 */
   ip = &a          /* ②为指针变量赋值 */

   fmt.Printf("a 变量的地址是: %x\n", &a  )
	/* 使用指针访指向的地址 */
   fmt.Printf("ip变量储存的地址: %x\n", ip )
   /* 使用指针访问指向的值 */
   fmt.Printf("*ip 变量的值: %d\n", *ip )
}
```
以上实例执行输出结果为：
```
a 变量的地址是: 20818a220
ip 变量储存的指针地址: 20818a220
*ip 变量的值: 20
```
> 当声明一个指针变量未赋值时，它的值为`nil`,也称为**空指针**。一个指针变量通常缩写为 ptr。


## 二、结构体（Struct）
一个`结构体（struct）`就是一组`字段（field）`。
```go
type Book struct {
	name string
    author string
}
var a Book                                // 声明a为Book结构体
var b = Book{"Golang 入门经典", "Unknown"} // 全部初始化
var c = Book{name: "C++ 入门指南"}         // 局部初始化
d := Book{name: "鸟哥的 Linux 私房菜"}     // 使用 :=
var e *Book = new(Book)                  // 使用指针，使用new给一个新的结构体变量分配内存
```

结构体匿名
```go
var a = struct{
    name string
    author string
}{"Golang 入门经典", "Unknown"}
```

结构体的字段匿名，但结构体和字段不能同时匿名
```go
type Book struct {
	string
    string
}
var a Book = Book{"Golang 入门经典", "Unknown"}
```

访问结构体成员:
```go
var a Book = Book{"Golang 入门经典", "Unknown"}
fmt.Println(a.name, a.author)
```
- 类型转换：如果两个结构体具有完全相同的定义，它们可以进行显式类型转换。
- 嵌套：将一个结构体作为新结构体的一个字段。
- 继承：将一个结构体的字段和方法引入新结构体。

> 数组可以看作是一种结构体类型，不过它使用下标而不是具名的字段。


## 三、数组（Array）
`Golang`数组声明需要指定元素类型及元素个数，语法格式：`var arrayName [size]dataType`
```go
var numbers [5]int       // 声明数组，整数类型初始值为 0
var numbers = [5]int{1, 2, 3, 4, 5}  //声明并初始化列表
numbers := [5]int{1, 2, 3, 4, 5} //使用 := 简短声明语法来声明和初始化
numbers := [...]int{1, 2, 3, 4, 5} //注意 [...]int 是数组, []int 是切片
```
`Golang`中数组名表示整个数组，传递数组有时会产生很大的开销，可以使用指针数组。
```go
var a [3]int = [3]int{1, 2, 3}
var p *[3]int = &a
```


## 四、切片（Slice）
`Golang`中`切片（slice）`是对数组一个连续片段的引用，所以切片是一个引用类型。每个数组的大小都是固定的。而切片则为数组元素提供了动态大小的、灵活的视角。
```go
var a []int  // 声明切片用[]不需要说明长度, 注意 [3]int 或 [...]int 都是数组不是切片
var a = []int{1, 2, 3}  // [1 2 3]
a := []int{1, 2, 3}     // [1 2 3]
```
或使用`make()`函数来创建切片：`make([]T, length, capacity)`，其中`capacity`为可选参数，make只用于构造`slice`/`map`/`channel`。
```go
var a = make([]int, 3)
a := make([]int, 3)   // 简写
```
- 切片是可索引的，并且可以由`len()`方法获取长度。
- 切片提供了计算容量的方法`cap()`可以测量切片最长可以达到多少。
```go
package main
import "fmt"
func main() {
    var numbers = make([]int,3,5)
    fmt.Printf("len=%d cap=%d slice=%v\n", len(numbers), cap(numbers), numbers)
}
```
输出结果为:
```
len=3 cap=5 slice=[0 0 0]
```
- 切片的初始化格式是：`var s []T = a[start:end]`，表示`s`是由数组`a`从索引`start`到`end-1`之间的元素构成的子集。
- 如果切片取完整的数组为：`a[0 : len(a)]`，简写：`a[:]`
```go
var a = []int{1, 2, 3} // 声明切片a
b := a[:]    // [1 2 3] ，把切片a赋给b，如果a是一个数组, 此方法将创建一个切片
c := a[1:]   // [2 3]   ，c=切片a删除前1个元素
c := a[:2]   // [1 2]   ，c=切片a保留前2个元素
c := a[1:2]  // [2]     ，c=切片a截取索引 [1, 2) 元素
```
- append() 与 copy() 都是对数据的拷贝，会对引用到的所有数据进行拷贝。
```go
var a = []int{1, 2}
var b = []int{4, 5, 6}
var c []int = append(a, 4)        // [1 2 4]     传入切片类型与元素类型, 返回切片类型
var d []int = append(a, 4, 5, 6)  // [1 2 4 5 6] 传入切片类型与多个元素类型，返回切片类型
var e []int = append(a, b...)     // [1 2 4 5 6] 传入两个切片类型, 返回切片类型, 是将 b 追加到 a 尾后的新切片，args...表示解包
var i int = copy(a, b)            // 2 [4 5] [4 5 6]  将 b 拷贝到 a , 返回拷贝量, 拷贝量为 min(len(a), len(b))
```


## 五、字符串（String）
在`Golang`中`字符串`默认使用`UTF-8`编码。字符串是一种`值类型`，且值**不可变**；更深入地讲，字符串是字节的定长数组`[...]byte`。
```go
var a string = "Hello World!"
var b = "Golang 入门经典"
c := "abcABC123"
```
- 字符串可以认为是一个静态切片类型，可以进行相应的切片操作。不可使用`append`和`copy`函数。
- `Golang`中使用`strings`包来完成对字符串的主要操作。
```go
strings.HasPrefix(s, prefix string) bool // HasPrefix 判断字符串 s 是否以 prefix 开头
strings.HasSuffix(s, suffix string) bool // HasSuffix 判断字符串 s 是否以 suffix 结尾
strings.Replace(str, old, new string, n int) string  // 字符串替换
strings.Count(s, str string) int         // Count 用于统计字符串 str 在字符串 s 中出现的非重叠次数

strings.Contains(s, substr string) bool  // Contains 判断字符串 s 是否包含 substr
strings.Index(s, str string) int         // Index 查找 str 在父串 s 中的位置（子串str第一个字符的索引）
strings.LastIndex(s, str string) int     // LastIndex 查找 str 在父串 s 中最后出现的位置
strings.IndexRune(s string, r rune) int  // 非 ASCII 编码的字符 使用 IndexRune 来对字符进行定位

strings.Repeat(s, count int) string  // Repeat 重复字符串,并返回一个新串,count为重复次数
strings.ToLower(s) string            // ToLower 转小写
strings.ToUpper(s) string            // ToUpper 转大写

strings.TrimSpace(s string) string           // 去除前后空字符
strings.Trim(s, chars string) string         // 去除开头和结尾的指定字符 chars
strings.TrimLeft(s, chars string) string     // 去除开头的指定字符 chars
strings.TrimRight(s, chars string) string    // 去除结尾的指定字符 chars

strings.Fields(s) []string  // 以 空白 分割字符串 s，返回 slice。如果字符串只包含空白符号，返回一个长度为 0 的 slice 。
strings.Split(s, sep string) []string   // 以 sep 分割字符串 s，返回 slice
strings.Join(sl []string, sep string) string // 以 sep 衔接 sl 中元素, Split 的逆过程
```

- `Golang`中使用`fmt.Sprint(a ...any) string`将任意类型转换为字符串, 只要类型满足`fmt.Stringer`接口。
- `Golang`中使用`strconv`包来完成对字符串类型转换。任何类型`T`转换为字符串总是成功的。
    + `strconv.Itoa(i int) string`：返回数字`i`所表示的字符串类型的十进制数。
    + `strconv.Atoi(s string) (i int, err error)`：将字符串转换为`int`型。
    + `strconv.FormatFloat(f float64, fmt byte, prec int, bitSize int) string`：将64位浮点型的数字转换为字符串
        * `fmt` 表示格式（其值可以是 'b'、'e'、'f' 或 'g'）。
        * `prec` 表示精度。
        * `bitSize` 则使用32表示`float32`，用64表示`float64`。
    + `strconv.ParseFloat(s string, bitSize int) (f float64, err error)`：将字符串转换为`float64`型。


## 六、映射（Map）
`Map`映射将键映射到值，是一种无序的键值对的集合。
- `Map`是引用类型，声明：
```go
map[keytype]valuetype{key: value...}
make(map[keyType]valueType, initialCapacity) // 使用 make 函数, initialCapacity 是可选的参数，用于指定 Map 的初始容量
```
- `make`函数会返回给定类型的映射，并将其初始化备用。
```go
a := make(map[string]int) // 创建一个空的 Map
b := map[string]int{"abc": 1, "dfe": 9} // 使用字面量创建 Map
b["abc"] = 2 // 如果元素不存在, 插入值, 否则修改值
delete(b, "abc")  // 如果元素存在, 删除元素, 否则不进行操作
len := len(b) // 获取 Map 的长度
// 遍历Map元素
for key, value := range b {
    fmt.Println(key, value)
}
for key := range b {
fmt.Println(key, b[key])
}
```


## 七、通道（Channel）
`channel`用于进行多线程管道通信与同步。`channel`也是引用数据类型，声明：`make(chan <type>, [<size>])`。
```go
a := make(chan int)  // 无缓冲区的 int 通道
b := make(chan int, 2)  // 缓冲区大小为 2 的 int 通道
```
- `channel`具有缓冲区大小，读写会对`channel`的缓冲区进行操作。当缓冲区为空时，读操作阻塞，直到新的写操作完成；当缓冲区满时，写操作阻塞。
- 特殊地，当缓冲区大小为`0`时，所有读写操作都会阻塞等待直到`channel`的读写操作配对。
```go
a <- 1   // channel 写
x := <-a //channel 读
// channel 非阻塞读: select 语句将随机抽取一个 case，如果通信成功将运行 block；如果通信失败并且存在 default 将运行 block0
select {
    case x := <-a:
        <block1>
	case x := <-c1:
        <block2>
    default:  // 读取失败
        <block0>
}
```


## 八、函数（Function）
`函数`是基本的代码块，用于执行一个任务。`Golang`最少有个`main()`函数。`Golang`标准库提供了多种可用的内置的函数。如`len()`、`cap()`等。
- `Golang`有三种类型的函数：
    + 普通的带有名字的函数
    + 匿名函数或者`lambda`函数
    + 方法（`Methods`：方法只是个带接收者参数的函数）
- `Golang`中没有函数默认值、函数重载。
```go
// 声明函数
func swap(x, y string) (string, string) {
    return y, x
}
// 匿名函数，Golang 中 args... 表示解包，...args 表示封包
Sum := func(a ...int) int {
    s := 0
    for _, i := range a {
        s += i
    }
    return s
}
// 函数调用
a, b := swap("Golang", "Functions")
fmt.Println(Sum([]int{1, 2, 3, 4, 5}...))
fmt.Println(Sum(1, 2, 3, 4, 5))
```
`defer`是`Golang`中一种**延迟调用机制**。
`defer`后面的语句只有在当前函数执行完毕后才能执行，将延迟的语句按**defer的逆序**进行执行，也就是先进后出(`LIFO`)，通常用于释放资源。
```go
func func1(){
    fmt.Println("我是 func1")
}
func func2(){
    fmt.Println("我是 func2")
}
func func3(){
    fmt.Println("我是 func3")
}
func main(){
    defer func1()
    defer func2()
    defer func3()
    fmt.Println("main")
}
```
运行结果为：
```shell
main
我是 func3
我是 func2
我是 func1
```
递归函数：最经典的例子便是计算斐波那契数列。
```go
package main
import "fmt"

func fibonacci(n int) int {
    if n <= 1 {
        return 1
    }
    return fibonacci(n-2) + fibonacci(n-1)
}

func main() {
    for i := 0; i < 10; i++ {
       fmt.Printf("%d\t", fibonacci(i))
    }
}
```
运行结果为：
```shell
1	1	2	3	5	8	13	21	34	55
```
匿名函数：不能够独立存在，但可以被赋值于某个变量，然后通过变量名对函数进行调用。也可以直接对匿名函数进行调用，即**闭包**。
```go
// 计算从 1 到 1 百万整数的总和
func() {
    sum := 0
    for i := 1; i <= 1e6; i++ {
        sum += i
    }
}()
```
将匿名函数作为返回值
```go
package main
import "fmt"

func main() {
    var f = Adder()
    fmt.Print(f(1), "\t")
    fmt.Print(f(20), "\t")
    fmt.Print(f(300))
}
func Adder() func(int) int {
    var x int
    return func(delta int) int {
        x += delta
        return x
    }
}
```
运行结果为：
```shell
1	21	321
```


## 九、方法（Method）
- `Golang`方法是作用在接收者（receiver）上的一个函数，接收者是某种类型的变量。因此方法是一种特殊类型的函数。
    + 一个类型加上它的方法等价于面向对象中的一个类。
    + 因为方法是函数，所以同样不允许方法重载，但是如果基于接收者类型，是有重载的：具有同样名字的方法可以在多个不同的接收者(同一个包内)类型上存在。
- 在方法名之前，`func` 关键字之后的括号中指定接收者（receiver）。
```go
type File struct {
	fd int
    flag uint
}
type Test struct {
    fd int
    flag uint
}
func (file *File) open(fp string, mode string) error {
    // ...
}
func (file *Test) open(fp string, mode string) error {
    // ...
}
func main() {
    file := File{}
    file.open("data.txt", "w")
    test := Test{}
    test.open("data.txt", "w")
}
```
- 方法的对象必须是本包结构体。
- 值对象与指针对象是不同的，但它们的调用方式是相同的。以值对象传递，将对对象的拷贝操作；以指针对象传递，将直接操作对象。

- **函数和方法的区别**
    + 函数将变量作为参数：`Function1(recv)`
    + 方法在变量上被调用：`recv.Method1()`

> 方法没有和数据定义（结构体）混在一起：它们是正交的类型；表示（数据）和行为（方法）是独立的。


## 十、接口（Interface）
`接口类型`的定义为一组方法签名。接口定义了一组方法（方法集），但是这些方法不包含（实现）代码：它们没有被实现（它们是抽象的）。接口里面也不能包含变量。
```go
package main
import "fmt"

/* 定义接口 */
type Shaper interface {
    Area() float32
}

/* 结构体 */
type Square struct {
    side float32
}
/* 实现接口方法 */
func (sq *Square) Area() float32 {
    return sq.side * sq.side
}

func main() {
    sq1 := new(Square)
    sq1.side = 5
    fmt.Printf("The square has area: %f\n", sq1.Area())
}
```
运行结果为：
```shell
The square has area: 25.000000
```

`Golang`接口也是值。它们可以像其它值一样传递。接口值可以用作函数的参数或返回值。
```go
sq1 := new(Square)
sq1.side = 5
// 接口值
var sq2 Shaper
sq2 = sq1
fmt.Printf("The square has area: %f\n", sq2.Area());
```
运行结果为：
```shell
The square has area: 25.000000
```

- 接口被隐式地实现，无需显式声明，只要类型实现了接口中的方法，它就实现了此接口。多个类型可以实现同一个接口。一个类型可以实现多个接口。
- 空接口：`type Any interface {}`，任何结构体都可以赋值到空接口，空接口在底层原理上与一般接口不同。
- 匿名接口：`var data interface{}`，在定义变量时将类型指定为接口的函数签名，常用于初始化一次接口变量的场景。
- 嵌套接口：一个接口可以包含一个或多个其他的接口，这相当于直接将这些内嵌接口的方法列举在外层接口中一样。
```go
type Writer interface {
    write(data []byte) (int, error)
}
type Reader interface {
	read(n int) ([]byte, error)
}
// 嵌套接口
type File interface {
    Writer
    Reader
	Close()
}
```

- `类型断言`提供了访问接口值底层具体值的方式。
    + `t, ok := i.(T)`语句断言接口值`i`保存了具体类型`T`，并将其底层类型为`T`的值赋予变量`t`；
        * 若`i`保存了一个`T`，那么`t`将会是其底层值，而`ok`为`true`；
        * 否则，`ok`将为`false`而`t`将为`T`类型的零值。
- `类型选择`与一般的 switch 语句相似，不过类型选择中的 case 为类型（而非值）， 它们针对给定接口值所存储的值的类型进行比较。
```go
switch v := i.(type) {
    case T:
        // v 的类型为 T
    case S:
        // v 的类型为 S
    default:
        // 没有匹配，v 与 i 的类型相同
}
```
