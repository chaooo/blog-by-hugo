---
title: Golang -- 内置数据类型
date: 2023-07-23 15:45:40
tags: [Go, 后端开发]
categories: [Golang]
series: Golang入门
---

### 一、指针类型
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
```shell
a 变量的地址是: 20818a220
ip 变量储存的指针地址: 20818a220
*ip 变量的值: 20
```
> 当声明一个指针变量未赋值时，它的值为`nil`,也称为**空指针**。一个指针变量通常缩写为 ptr。


### 二、结构体




### 三、数组（Arrays）
### 四、切片（Slices）
### 五、字符串（Strings）
### 六、映射（Maps）
### 七、通道（Channels）
### 八、函数（Functions）
### 九、接口（Interfaces）
