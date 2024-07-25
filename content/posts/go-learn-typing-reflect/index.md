---
title: Golang -- 动态类型与反射
date: 2023-07-27 20:42:40
tags: [Go, 后端开发]
categories: [Golang]
series: Golang入门
---

`Golang`没有类，而是松耦合的类型、方法对接口的实现。
- 封装（数据隐藏）：使用驼峰，public首字母大写，private首字母小写。
    + 1）包范围内的：通过标识符首字母小写，`对象`只在它所在的包内可见;
    + 2）可导出的：通过标识符首字母大写，`对象`对所在包以外也可见;
- 继承：用组合实现：内嵌一个（或多个）包含想要的行为（字段和方法）的类型；多重继承可以通过内嵌多个类型实现。
- 多态：用接口实现：某个类型的实例可以赋给它所实现的任意接口类型的变量。类型和接口是松耦合的，并且多重继承可以通过实现多个接口实现。Go 接口不是 Java 和 C# 接口的变体，而且：接口间是不相关的，并且是大规模编程和可适应的演进型设计的关键。


### 动态类型（Duck Typing）
- **静态类型**就是变量声明的时候的类型，如`var age int`其中`int`是静态类型。
- **动态类型**是在运行时才能确定具体的数据类型。
```go
var i interface{}  //i 的静态类型就是 interface{}
i = 18             //i 的静态类型就是 interface{}，动态类型变成了 int 类型。
i = "Golang Learn" //i 的静态类型就是 interface{}，动态类型变成了 string 类型。
```
动态类型的优势在于它的灵活性。我们可以编写通用的代码来处理不同类型的数据，动态类型常用于需要处理多种类型数据的场景。
例如，我们编写一个函数，需要接收不同类型的数据，并针对这些数据执行相应的操作。
使用动态类型，我们可以将函数参数定义为一个接口类型，从而使得函数能够接收任意实现该接口的类型。
```go
var reader io.Reader   // reader 对象的静态类型是 io.Reader接口类型，暂无动态类型。
tty, err := os.OpenFile("/dev/tty", os.O_RDWR, 0)
if err != nil {
    return nil, err
}
reader = tty          // reader 对象的静态类型还是 io.Reader，而动态类型变成了 *os.File
```
使用**空接口**（不带函数的interface,在底层实现原理上与非空接口不同）：
```go
var empty interface{}  // 由于 interface{} 是一个空接口，此时 empty 对象的类型是 nil
tty, err := os.OpenFile("/dev/tty", os.O_RDWR, 0)
if err != nil {
    return nil, err
}
empty = tty            // tty 是一个 *os.File 类型的实例，此时 empty 对象的类型变成了 *os.File
```

### 反射（Reflection）
由于动态类型的存在，在一个函数中接收的参数的类型有可能无法预先知晓，此时我们就要对参数进行反射，能够动态知道给定数据对象的类型和结构，然后根据不同的类型做不同的处理。
- `Golang`中的反射，在使用中最核心的就两个函数：
    - `reflect.TypeOf(i interface{}) Type`
    - `reflect.ValueOf(i interface{}) Value`
```go
package main
import (
  "fmt"
  "reflect"
)
func main() {
  var x float64 = 3.4
  t := reflect.TypeOf(x)
  v := reflect.ValueOf(x)

  fmt.Println("type:", t)   // 打印type: float64
  fmt.Println("value:", v.String())  // 打印value: <float64 Value>
  fmt.Println("type:", v.Type())     // 打印type:float64 ，reflect.ValueOf还可以获取到当前数据值的Type
  fmt.Println("kind is float64:", v.Kind() == reflect.Float64) //打印kind is float64: true
  fmt.Println("value:", v.Float())                              //打印value: 3.4
}
```
运行结果为：
```shell
type: float64
value: <float64 Value>
type: float64
kind is float64: true
value: 3.4
```

- 通过反射对象`Value`可以修改(设置)原数据的值。反射对象`Value`对应着原数据对象本身，而`Type`只是表示原数据的类型相关的内容。
    + 通过`Value`结构体的`CanSet()`方法来查看是否可以设置修改新值。
    + 传值通过传指针类型，通过`Elem()`方法拿到原数据对象指针类型指向的值类型(*v)。
```go
var x float64 = 3.4
v := reflect.ValueOf(&x)
fmt.Println(v.CanSet()) // false
p := v.Elem()
fmt.Println(p.CanSet()) // true
fmt.Println(x)          // 3.4
p.SetFloat(7.1)
fmt.Println(x)          // 7.1
```

- `Golang`反射和接口在底层结构上相近，都是“类型”和“数据值”两部分，但是值得注意的是：接口的“类型”和“数据值”是在“一起的”，而反射的“类型”和“数据值”是分开的。
- `Golang`的`reflect`包为我们提供了多种能力，包括如何使用反射来动态修改变量、判断类型是否实现了某些接口以及动态调用方法等功能。
- 反射必须结合interface使用，反射可以从接口值反射到对象，也可以从对象反射回接口值，反射可以修改反射类型对象，通过反射可以“动态”调用方法。
