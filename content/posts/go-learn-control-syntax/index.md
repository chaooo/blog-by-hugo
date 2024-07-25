---
title: Golang -- 控制语句与错误处理
date: 2023-07-25 18:50:05
tags: [Go, 后端开发]
categories: [Golang]
series: Golang入门
---

`Golang`中的条件控制语句省去了许多不必要的附加符号，使代码更加简洁。
### for 循环
`Golang`只有一种循环结构：**for循环**，基本形式为：
```
for 初始化语句; 条件语句; 修饰语句 {}
```
- 基本的`for`循环由三部分组成，它们用分号隔开：
    + 初始化语句(可选)：在第一次迭代前执行
    + 条件表达式：在每次迭代前求值
    + 后置语句(可选)：在每次迭代的结尾执行
- 与其他语言不同，`Golang`的`for`语句后面的三个构成部分外没有小括号，大括号`{}`则是必须的。
```go
// for 没有小括号
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
// for 初始化语句和后置语句是可选的。
var j int = 0
for j < 10 {
    fmt.Println(j)
    j++
}
// 如果省略循环条件,则无限循环
for {
  fmt.Println("Running...")
  time.Sleep(time.Millisecond * 500)
}
```
- 循环控制语句可以控制循环体内语句的执行过程:
  + `break语句`:经常用于中断当前`for`循环或跳出`switch`语句。
  + `continue语句`:跳过当前循环的剩余语句，然后继续进行下一轮循环。
  + `goto语句`:将控制转移到被标记的语句。

### for-range 遍历
数组、`string`、`slice`、`map`、`channel`等都可以使用`for-range`语句遍历。
```go
slice := []int{1, 2, 3, 4, 5}
for key, value := range slice {
    fmt.Println(key, value)
}
// channel 没有 key 且阻塞
channel := make(chan int, 10)
for value := range channel {
    fmt.Println(value)
}
```


### if 判断
`Golang`的`if`判断语句与`for`循环类似，表达式外无需小括号，而大括号`{}`则是必须的。
```go
if condition1 {
    // do something 
} else if condition2 {
    // do something else    
} else {
    // default
}
```
和`for`一样，`if`语句可以在条件表达式前执行一个简短语句。该语句声明的变量作用域仅在 if 之内。
```go
package main
import (
  "fmt"
  "math"
)
func pow(x, n, lim float64) float64 {
  if v := math.Pow(x, n); v < lim {
    return v
  }
  return lim
}
func main() {
  fmt.Println(
    pow(3, 2, 10),  // 9
    pow(3, 3, 20),  // 20
  )
}
```

### switch 分支
- `switch`语句是编写一连串`if-else`语句的简便方法。一个`case`值等于条件表达式的子句且`case`值无需为常量，且取值不限于整数。
- `Golang`只会运行选定的`case`，与其他语言相比，相当于为每个`case`后面自动添加了`break`语句。`Golang`除非通过`fallthrough`语句继续执行后续分支的代码，否则分支会自动终止。
- `switch`的`case`语句从上到下顺次执行，直到匹配成功时停止。
```go
k := 3
switch k {
    case 1: fmt.Println("case 1");
    case 2: fmt.Println("case 2");
    case 3: fmt.Println("case 3"); fallthrough;
    case 4: fmt.Println("case 4");
    case 5: fmt.Println("case 5");
    default: fmt.Println("default case")
}
```
运行结果为：
```shell
case 3
case 4
```


### defer 推迟
- `defer`语句会将函数推迟到外层函数返回之后执行。
- 推迟调用的函数其参数会立即求值，但直到外层函数返回前该函数都不会被调用。
- 推迟调用的函数调用会被压入一个栈中(`LIFO`:后进先出)。
 当外层函数返回时，被推迟的调用会按照后进先出的顺序调用。
```go
package main
import "fmt"
func main() {
	fmt.Println("counting")
	for i := 0; i < 10; i++ {
		defer fmt.Printf("%d\t", i)
	}
	fmt.Println("done")
}
```
运行结果为：
```shell 
counting
done
9	8	7	6	5	4	3	2	1	0
```


### Go 错误处理
`Golang`没有`try/catch`异常机制：不能执行抛异常操作。但是有一套`defer-panic-and-recover`机制，可以“捕捉”异常，也更轻量，并且只应该作为（处理错误的）最后的手段。
- `Golang`有一个内建接口`error`类型:
```go
type error interface {
    Error() string
}
```
- 构造异常：
```go
err := errors.New("异常信息")  // error: "异常信息"
err := fmt.Errorf("错误信息: %v", "异常信息")  // errors.New(fmt.Sprintf(...))
```
- 捕捉异常：判断错误是否等于`nil`来进行错误处理。
```go
func tryInt(s string) {
	i, err := strconv.ParseInt(s, 0, 64)
	if err == nil {
		fmt.Println("Value:", i)
	} else {
		fmt.Println("Error:", err)
	}
}
func main() {
	tryInt("123123")
	tryInt("123a123")
}
```
运行结果为：
```shell
Value: 123123
Error: strconv.ParseInt: parsing "123a123": invalid syntax
```
- 运行时异常
    - 当发生像数组下标越界或类型断言失败这样的运行错误时，会触发运行时`panic`，伴随着程序的崩溃抛出一个`runtime.Error`接口类型的值。
    - `panic`可以直接从代码初始化：当程序不能继续运行时，可以使用`panic`函数产生一个中止程序的运行时错误。
```go
panic("A severe error occurred: stopping the program!")
```
运行结果为：
```shell
Starting the program
panic: A severe error occurred: stopping the program!
......
```
- 从`panic`中恢复
    + 内建函数`recover`被用于从`panic`或错误场景中恢复。
    + `recover`只能在`defer`修饰的函数中使用：`panic`会导致栈被展开直到`defer`修饰的`recover()`被调用或者程序中止。
```go
package main
import "fmt"
func main() {
   fmt.Println("Starting the program")
	defer func() {
		err := recover()
		if err != nil {
			fmt.Printf("捕捉异常: %T %v\n", err, err)
			fmt.Println("Recover the program")
		}
	}()
    panic("抛出异常")
    fmt.Println("Ending the program")
}
```
运行结果为：
``` shell
Starting the program
捕捉异常: string 抛出异常
Recover the program
```