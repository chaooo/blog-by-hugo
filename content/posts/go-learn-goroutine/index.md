---
title: Golang -- Go协程 与 通道
date: 2023-08-01 19:28:30
tags: [Go, 后端开发]
categories: [Golang]
series: Golang入门
toc: true
---

- 进程：主要指运行在内存中的应用程序；进程是系统进行资源分配和调度的一个独立单位，一个进程由一个或多个线程组成。
- 线程：线程是进程的一个实体，这些线程共享同一个内存地址空间，线程是`cpu`调度和分派的最小单位。
- 多线程：指在同一程序（一个进程）中有多个顺序流（线程）在执行。
- 并行与并发：
    + 并行：指多个处理器或者是多核的处理器同时处理多个不同的任务（物理上的同时发生）。
    + 并发：通过`cpu`调度算法，一个处理器同时处理多个任务（逻辑上的同时发生）。

  
## Go协程（goroutine）
`Golang`中，应用程序**并发处理**的部分被称作`goroutine`（**Go协程**），由`Go`运行时管理的**轻量级**线程。 它可以进行更有效的并发运算。

在协程和线程并不是一对一的关系：协程是根据一个或多个线程的可用性，映射（多路复用）在他们之上的；协程调度器在`Go`运行时很好的完成了这个工作。

当系统调用（比如等待I/O）阻塞协程时，其他协程会继续在其他线程上工作。协程的设计隐藏了许多线程创建和管理方面的复杂工作。

协程可以运行在多个线程之间，也可以运行在线程之内，让你可以很小的内存占用就可以处理大量的任务。

使用关键字`go`启动一个协程, 同一个程序中的所有`goroutine`共享同一个地址空间并且分配了独立的栈。
```go
go 函数名( 参数列表 ) // 在当前的计算过程中开始一个同时进行的函数
```

协程的栈会根据需要进行伸缩，不会出现栈溢出；开发者无需关心栈的大小。当协程结束的时候，它会静默退出：用来启动这个协程的函数也不会得到任何的返回值。

任何`Go`程序都必须有的`main()`函数默认是一个协程，尽管它并没有通过`go`来启动。


## 信道/通道（Channel）
**信道**是带有类型的管道，你可以通过它用信道操作符`<-`来发送或者接收值。
```go
ch <- v    // 将 v 发送至信道 ch。
v := <-ch  // 从 ch 接收值并赋予 v。
```
`Golang`有一个特殊的类型，`通道（Channel）`，信道在使用前必须创建：
```go
ch := make(chan int)
```
未初始化的通道的值是`nil`。

默认情况下，通信是同步且无缓冲的：发送端发送数据，同时必须有接收端相应的接收数据。所以**通道的发送/接收操作在对方准备好之前是阻塞的**。

### 线程对话
```go
package main
import (
	"fmt"
	"time"
)
var wait = make(chan any)

func thread1(info []string, from chan string, to chan string) {
  fmt.Println("【Thread 1 Start.】")
  defer func() { wait <- nil }()
  for _, send := range info {
    // from 接收 recv
    recv := <-from
    fmt.Println("Thread 1 Receive", recv)
    // send 发送至 to
    fmt.Println("Thread 1 Send   ", send)
    to <- send
    time.Sleep(time.Millisecond * 500)
  }
  fmt.Println("【Thread 1 Finished.】")
}

func thread2(info []string, from chan string, to chan string) {
  fmt.Println("【Thread 2 Start.】")
  defer func() { wait <- nil }()
  for _, send := range info {
    // send 发送至 to
    fmt.Println("Thread 2 Send   ", send)
    to <- send
    // from 接收 recv
    recv := <-from 
    fmt.Println("Thread 2 Receive", recv)
    time.Sleep(time.Millisecond * 500)
  }
  fmt.Println("【Thread 2 Finished.】")
}

func main() {
  chan1 := make(chan string)
  chan2 := make(chan string)
  go thread1([]string{
    "I'm doing well, thank you! How about you, Jamhus?",
    "Well, first I need to finish up some reports for the meeting this afternoon...",
    "Thanks for offering, but I think I can handle it.",
  }, chan1, chan2)
  go thread2([]string{
    "Good morning, Mr.Smith! How are you today?",
    "I'm great, thanks for asking. So, what's on the agenda for today?",
    "Sounds busy! Do you need any help with the reports?",
  }, chan2, chan1)
  <-wait
  <-wait
}
```
运行结果为：
```shell
【Thread 2 Start.】
Thread 2 Send    Good morning, Mr.Smith! How are you today?
【Thread 1 Start.】
Thread 1 Receive Good morning, Mr.Smith! How are you today?
Thread 1 Send    I'm doing well, thank you! How about you, Jamhus?
Thread 2 Receive I'm doing well, thank you! How about you, Jamhus?
Thread 2 Send    I'm great, thanks for asking. So, what's on the agenda for today?
Thread 1 Receive I'm great, thanks for asking. So, what's on the agenda for today?
Thread 1 Send    Well, first I need to finish up some reports for the meeting this afternoon...
Thread 2 Receive Well, first I need to finish up some reports for the meeting this afternoon...
Thread 2 Send    Sounds busy! Do you need any help with the reports?
Thread 1 Receive Sounds busy! Do you need any help with the reports?
Thread 1 Send    Thanks for offering, but I think I can handle it.
Thread 2 Receive Thanks for offering, but I think I can handle it.
【Thread 2 Finished.】
【Thread 1 Finished.】
```

### 带缓冲的信道
信道可以是 带缓冲的。将缓冲长度作为第二个参数提供给 make 来初始化一个带缓冲的信道：
```go
ch := make(chan int, 100)
```
仅当信道的缓冲区填满后，向其发送数据时才会阻塞。当缓冲区为空时，接受方会阻塞。
```go
package main
import "fmt"
func main() {
    // 整数类型的带缓冲通道,缓冲区大小为2
    ch := make(chan int, 2)
    // 可以同时发送2个数据, 而不用立刻需要去同步读取数据
    ch <- 1
    ch <- 2
    // 获取这两个数据
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}
```

### 遍历通道与关闭通道
- 循环 `for i := range ch {}`会不断从信道接收值，直到它被关闭。
- 可以使用逗号，`ok`操作符：用来检测通道是否被关闭。
```go
v, ok := <-ch   // 如果 v 接收到值，则为 ok 为 true
```
- 通道可以通过`close(ch)`显式的关闭，尽管信道与文件不同不必每次都关闭。

```go
package main
import "fmt"
func fibonacci(n int, c chan int) {
    x, y := 0, 1
    for i := 0; i < n; i++ {
        c <- x
        x, y = y, x+y
    }
    close(c)
}
func main() {
    c := make(chan int, 10)
    go fibonacci(cap(c), c)
    // range 函数遍历每个从通道接收到的数据，因为 c 在发送完 10 个数据之后就关闭了通道，
    // 所以这里我们 range 函数在接收到 10 个数据之后就结束了。
    // 如果上面的 c 通道不关闭，那么 range 函数就不会结束，从而在接收第 11 个数据的时候就阻塞了。
    for i := range c {
      fmt.Printf("%d\t", i)
    }
}
```
运行结果为：
```shell
0	1	1	2	3	5	8	13	21	34
```

### select 多路复用
`select`在遇到多个`<-ch`同时满足可读或者可写条件时会随机选择一个`case`执行其中的代码。`default`语句是可选的，如果不存在可以收发的`Channel`时，执行`default`中的语句。
```go
select {
    case u:= <- ch1: // 接收通道 1 的结果
            // do something ...
    case v:= <- ch2: // 接收通道 2 的结果
            // do something ...
    default: // no value ready to be received
            // do default ...
}
```
带超时机制的`select`，可以避免长期陷入某种操作的等待中，也可以做一些异常处理工作。
```go
select {
    case <-c:
        // ... do some stuff
    case <-time.After(30 *time.Second):  // 30s 超时
        return
}
```

## 时间控制
通过标准库`time`包中的`Timer`和`Ticker`，`Go`让定时任务的实现变得既简单又高效。
`Golang`的定时器背后是一个高效的时间管理机制。定时器的触发基于时间轮（timer wheel）算法，这是一种减少时间检查开销的数据结构，能够保证即使在大量定时器存在的情况下也能保持较高的性能。

### 定时器（Timer）
**定时器**（`Timer`）用于在未来某一时刻执行单次的任务。构造为`NewTimer(d Duration)`，只发送一次时间且在`Dration d`之后。
```go
timer := time.NewTimer(2 * time.Second) // 两秒后触发定时器,从定时器的C通道接收到一个时间值，表示定时器已经触发。
v := <- timer.C
fmt.Println("Timer expired：", v)       // 两秒后打印：Timer expired： 2009-11-10 23:00:02 +0000 UTC m=+2.000000001
```
`Timer`还提供了`Stop`和`Reset`方法，允许你在定时器触发之前停止它，或者改变定时器的触发时间。
```go
if timer.Stop() {
    fmt.Println("Timer stopped before expired")
}
```

### 计时器（Ticker）
使用`time.Ticker`实现周期性任务，与`time.Timer`相比，`time.Ticker`用于处理需要重复执行的任务。构造为`NewTicker(d Duration)`，它会按照指定的时间间隔重复触发。
```go
ticker := time.NewTicker(1 * time.Second)
for range ticker.C {
    fmt.Println("Ticker ticked")
}
```
与`Timer`类似，`Ticker`也提供了`Stop`方法用于停止定时器。

### 使用 select 实现心跳机制
使用`select`结合`time.Ticker`，可以实现带有心跳机制的 select。这种机制让我们可以在监听 channel 的同时，执行一些周期性的任务。
```go
heartbeat := time.NewTicker(30 * time.Second)
defer heartbeat.Stop()
for {
    select {
        case <-c:
        // ... do some stuff
        case <- heartbeat.C:
        //... do heartbeat stuff
    }
}
```

### 使用context包取消定时任务
Go的context包提供了一种方式来发送取消信号到多个Goroutines，这可以用来在并发环境下取消定时器任务。
```go
ctx, cancel := context.WithCancel(context.Background())
timer := time.NewTimer(10 * time.Second)

go func() {
    <-ctx.Done() // 等待取消信号
    if !timer.Stop() {
        <-timer.C // 如果定时器已经触发，确保清空通道
    }
}()

// 在某个时刻取消定时器任务
cancel()
```
当调用cancel()函数时，通过context发送的取消信号会导致等待ctx.Done()的Goroutine被唤醒。
然后，该Goroutine尝试停止定时器，如果定时器已经触发，则确保从timer.C通道中读取，避免泄露。


## Web服务中的会话超时管理
```go
type Session struct {
    ID        string
    User      string
    ExpiresAt time.Time
}

// sessionStore 存储所有活跃的会话
var sessionStore = make(map[string]Session)
var mutex sync.Mutex

// 新建会话时启动定时器
func createSession(user string, duration time.Duration) string {
    expiresAt := time.Now().Add(duration)
    session := Session{ID: uuid.New().String(), User: user, ExpiresAt: expiresAt}

    mutex.Lock()
    sessionStore[session.ID] = session
    mutex.Unlock()

    // 启动定时器，到期时删除会话
    go func(id string) {
        <-time.After(duration)
        mutex.Lock()
        delete(sessionStore, id)
        mutex.Unlock()
        fmt.Printf("Session %s expired\n", id)
    }(session.ID)

    return session.ID
}
```
在这个案例中，每创建一个新会话时，我们都会启动一个定时器，当会话到期时自动删除会话。
这种方式简单直观，但在会话非常多的情况下，可能会创建大量的Goroutines和定时器。
对于更复杂的应用，考虑使用一个中心的定时器来管理所有会话的过期，或者使用第三方库来处理会话管理。

