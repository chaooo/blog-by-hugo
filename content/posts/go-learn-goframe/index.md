---
title: Golang -- GoFrame学习笔记01
date: 2023-09-20 13:56:06
tags: [Go, 后端开发]
categories: [Golang]
series: Golang入门
toc: true
---

GoFrame 是一款模块化、高性能的 Go 语言开发框架。

## 准备工作
1. 前置条件：已安装Go语言开发环境，已配置好GOROOT、GOPATH环境变量；GoFrame文档：[https://goframe.org/](https://goframe.org/)。
2. 安装框架工具：GoFrame 框架提供了功能强大的 gf 命令行开发辅助工具，工具地址：[https://github.com/gogf/gf/releases](https://github.com/gogf/gf/releases)。
下载对应的包安装。推荐安装到GOROOT的bin目录中
```shell
gf -v ## 查看是否安装成功
```

### 项目初始化
配置代理，在cmd中输入
```shell
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn
## 常用代理地址：`https://goproxy.cn`，`https://goproxy.io`，`https://mirrors.aliyun.com/goproxy/`
```

创建项目（-u：可选项，把框架初始化到最新版本）
```shell
gf init gf_demo -u
```

### 项目启动
进入项目中main.go文件所在的目录运行如下命令
```shell
gf run main.go
```
启动成功后，在浏览器中输入`http://127.0.0.1:8000/hello`查看结果。

### 目录结构
``` shell
/
├── api                 接口定义：请求接口输入/输出数据结构定义
├── hack                项目开发工具、脚本
├── internal            业务逻辑存放目录，核心代码
│   ├── cmd             入口指令与其他命令工具目录
│   ├── consts          常量定义目录
│   ├── controller      接口实现：控制器目录，接收/解析用户请求
│   ├── service         业务接口：具体的接口实现在logic中进行注入。
│   ├── logic           业务封装：核心业务逻辑代码目录
│   ├── model           数据结构管理模块，管理数据实体对象，以及输入与输出数据结构定义
│   |   ├── do          数据操作中业务模型与实例模型转换，由工具维护，不能手动修改
│   │   └── entity      数据模型是模型与数据集合的一对一关系，由工具维护，不用手动修改。
│   └── dao             数据访问对象目录，用于和底层数据库交互
├── manifest            包含程序编译、部署、运行、配置的文件
├── resource            静态资源文件
├── utility
├── go.mod
└── main.go             程序入口文件
```
更多详细介绍见文档[工程目录设计](https://goframe.org/docs/design/project-structure)

## WEB服务开发
WebServer 模块是其中比较核心的模块，由 ghttp 模块实现。实现了丰富完善的相关组件，例如： Router、 Cookie、 Session、路由注册、配置管理、模板引擎、缓存控制等等。
``` golang
## 创建并运行一个 WebServer
package main
import (
    "github.com/gogf/gf/v2/frame/g"
)
func main() {
    s := g.Server()
    s.BindHandler("/", func(r *ghttp.Request){ //路由注册
        r.Response.Writeln("go frame!")
    })
    s.SetPort(8080)
    s.Run()
}
```
更多详细介绍见文档[WEB服务开发](https://goframe.org/docs/web/start)

### 路由注册
``` golang
// 只支持GET请求
s.BindHandler("GET:/hello", func(req *ghttp.Request) {
    req.Response.Writeln("<h1>Hello World! GET</h1>")
})
// 将对象方法绑定到路由
s.BindHandler("/adduser", usercontroller.AddUser)
// 绑定user控制器中所有公共方法
s.BindObject("/user", usercontroller)
// 绑定user控制器中多个方法
s.BindObject("/user", usercontroller, "AddUser,UpdateUser")
// 绑定单个方法
s.BindObjectMethod("/deluser", usercontroller, "DeleteUser")
// 以RESTFul方绑定对象方法
s.BindObjectRest("/user", usercontroller)
// 分组注册
s.Group("/user", func(group *ghttp.RouterGroup) {
    group.Middleware(ghttp.MiddlewareHandlerResponse)
    group.Bind(
        usercontroller, // 绑定到控制器对象
    )
    // 可以用 GET POST PUT 等定义路由
    group.GET("/get", func(r *ghttp.Request) {
        r.Response.Writeln("/user/get")
    })
})
```

### 规范路由
GoFrame中提供了规范化的路由注册方式，注册方法如下：
``` golang
func Handler(ctx context.Context, req *Request) (res *Response, err error)
```
其中`Request`与`Response`为自定义的结构体。

示例代码：
``` golang
package main
import (
    "context"
    "fmt"
    "github.com/gogf/gf/v2/frame/g"
    "github.com/gogf/gf/v2/net/ghttp"
)
// 指定请求方法与路径
type HelloReq struct {
    g.Meta `path:"/hello" method:"get"`
    Name   string `v:"required" dc:"Your name"`
}
// 指定返回内容
type HelloRes struct {
    Reply string `dc:"Reply content"`
}
// 控制器实现
type HelloController struct{}
func (HelloController) Say(ctx context.Context, req *HelloReq) (res *HelloRes, err error) {
    res = &HelloRes{
        Reply: fmt.Sprintf(`Hi %s`, req.Name),
    }
    return
}
func main() {
    s := g.Server()
    s.Use(ghttp.MiddlewareHandlerResponse)
    s.Group("/", func(group *ghttp.RouterGroup) {
        group.Bind(
            new(HelloController),
        )
    })
    s.Run()
}
```
更多详细介绍见文档[规范路由](https://goframe.org/docs/web/router-registering-strict-router)


### 参数获取
#### query参数获取
query参数是指以`?a=1&b=2`的形式写在url中的参数，通常由GET方法传递。
``` golang
m := request.GetQuery("name")//单个参数值
m := request.GetQuery("name", "孙行者") // 对应参数值不存在时，返回指定的默认值
m := request.GetQueryMap()//获取全部Query参数
m := request.GetQueryMap(map[string]interface{}{"name": "者行孙", "age": 600})//指定需要获取的参数名称与默认值
// 将请求参数直接转化为对应的结构体
var u *user
err := request.ParseQuery(&u)
```
GoFrame中提供了`GetQueryMap`，`GetQueryMapStrStr`，`GetQueryMapStrVar`三个方法用于批量获取Query参数，三个方法使用方式一致，只是返回类型不同。

#### 表单参数获取（POST参数获取）
表单参数获取是指获取`application/x-www-form-urlencoded`、`application/form-data`、`multipart/form-data`等数据，也可以用来获取以json格式提交的数据，简单理解即为可以获取POST方法提交的数据。
``` golang
m := request.GetForm("name") //单个参数
m := request.GetForm("name", "烧包谷")//指定默认值
m := request.GetFormMap()//批量获取请求数据
m := request.GetFormMap(map[string]interface{}{"name": "大洋芋"})//指定需要获取的参数以及默认值
//将请求数据转化为自定义结构体
var u *user
err := request.ParseForm(&u)
```
可以用`GetFormMap`、`GetFormMapStrStr`、`GetFormMapStrVar`批量获取请求数据，三个方法使用方式一样，只是返回的Map类型不同。

#### 动态路由参数获取
动态路由需要对现有代码进行一点改动，需要先在`api`包中对指定的路由进行动态注册：
``` golang
type ParamsRes struct {
    g.Meta `mime:"text/html"`
}
type ParamsReq struct {
    g.Meta `path:"/params/:name" method:"all"`
}
```
再将控制器的方法利用`api`数据结构进行修改：
``` golang
func (c *Controller) Params(ctx context.Context, req *api.ParamsReq) (res *api.ParamsRes, err error) {
    request := g.RequestFromCtx(ctx)
    u := request.GetRouter("name") //获取路由参数，返回string；批量获取 request.GetRouterMap()，返回值为`map[string]string`
    request.Response.WriteJson(g.Map{"data": u})
    return
}
```

#### 所有请求参数获取
GoFrame中还提供了一些方法获取所有请求参数，用法与上面类似，只是不区分请求方法。按照参数优先级进行覆盖。
``` golang
data := request.GetRequest("name") //获取单个参数
data := request.Get("name") // GetRequest简写，获取单个参数
data := request.GetRequestMap() //批量获取请求数据
data := request.GetRequestMap(g.Map{"name": ""})// 可以指定需要获取的参数名及默认值
request.Parse(&u) // 将请求参数转为自定义结构体，u为自定义结构体指针
```

##### 请求参数优先级
1. Get 及 GetRequset 方法：`Custom > Form > Body > Query > Router`，也就是说自定义参数的优先级最高，其次是 Form 表单参数，以此类推。
2. GetQuery 方法：`Query > Body`，也就是说 query 参数将会覆盖 Body 中提交的同名参数。例如，Query 和 Body 中都提交了同名参数 id，参数值分别为 1 和 2，那么 Get("id") 将会返回 2，而 GetQuery("id") 将会返回 1。
3. GetForm 方法：无优先级，仅用于获取 Form 表单参数。


#### 请求参数总结
1. `Get/GetRequset`：常用方法，获取客户端提交的所有参数，按照参数优先级进行覆盖，不区分提交方式。
2. `GetQuery`：获取 GET 方式传递过来的参数，包括 Query String 及 Body 参数解析。
3. `GetForm`：获取表单方式传递过来的参数，表单方式提交的参数 Content-Type 往往为 application/x-www-form-urlencoded, application/form-data, multipart/form-data, multipart/mixed 等等。
4. `GetBody/GetBodyString`：获取客户端提交的原始数据，该数据是客户端写入到 body 中的原始数据，与 HTTP Method 无关，例如客户端提交 JSON/XML 数据格式时可以通过该方法获取原始的提交数据。
5. `GetJson`：自动将原始请求信息解析为 gjson.Json 对象指针返回。详见[通用编解码-gjson](https://goframe.org/docs/components/encoding-gjson)。
6. `Get*Struct`：将指定提交类型的所有请求参数绑定到指定的 struct 对象上，注意给定的参数为对象指针。绝大部分场景中往往使用 Parse 方法将请求数据转换为请求对象，详见[请求输入-默认值绑定](https://goframe.org/docs/web/request-default-value)。


### 请求输入
推荐将输入和输出定义为 `struct` 结构体对象，以便于结构化的参数输入输出维护。 GoFrame 框架支持非常便捷的对象转换，支持将客户端提交的参数如 Query参数、表单参数、内容参数、 JSON/XML 等参数非常便捷地转换为指定的 `struct` 结构体，并且支持提交参数与 `struct` 属性的映射关系维护。
``` golang
type ParamReq struct {
g.Meta   `path:"/params" method:"post"`
UserName string `p:"username" v:"required|length:4,30#请输入账号|账号长度为:{min}到:{max}位"`
PassWord string `p:"password" v:"required|length:6,30#请输入密码|密码长度不够"`
UserAge  int    `p:"age"      d:"18"`
}
```
其中`p:`或`param:`用于指定该成员对应的请求参数名，`d:`或`default:`用于指定默认值。，`v:`或`valid:`用于设置该属性的校验规格。

#### struct的tag(标签) 
| Tag(简写) | 全称 | 描述  |
|:-------:| :--------: |:----|
| v | valid | 数据校验标签。 |
| p | param | 自定义请求参数匹配。 |
| d | default | 请求参数默认值绑定。 |
| orm | orm | ORM标签，用于指定表名、关联关系。 |
| dc | description | 通用结构体属性描述，ORM和接口都用到。属于框架默认的属性描述标签。|


### 数据返回
HTTP Server 的数据返回通过 ghttp.Response 对象实现， ghttp.Response 对象实现了标准库的 http.ResponseWriter 接口。数据输出使用 `Write*` 相关方法实现，并且数据输出采用了 Buffer 机制，因此数据的处理效率比较高。任何时候可以通过 OutputBuffer 方法输出缓冲区数据到客户端，并清空缓冲区数据。
``` golang
func main() {
	s := g.Server()
	s.Group("/", func(group *ghttp.RouterGroup) {
		group.ALL("/json", func(r *ghttp.Request) {
			r.Response.WriteJson(g.Map{"id":1, "name": "john"})
		})
	})
	s.SetPort(8199)
	s.Run()
}
```

#### 统一返回结构
``` json
{
    "code":0, //自定义编码，用来表示请求成功与失败
    "msg":"请求成功", //提示信息，如果请求出错则为错误信息
    "data":{}  //请求返回数据，请求出错一般为null
}
```
GoFrame为前后端分离的API开发提供了很好的支持，只需要借助`api`模块就可以方便完成类似的返回结构，不需要自行定义。
- 在`api`中定义请求与响应数据结构：
``` golang
type ApiReq struct {
    g.Meta `path:"/api" method:"all"`
}
type ApiRes struct {
    UserName string  `json:"name"`
    UserAge  int     `json:"age"`
    List     g.Array `json:"list"`
}
```
- 在控制器中定义对应的方法:
``` golang
func (c *Controller) Api(ctx context.Context, req *api.ApiReq) (res *api.ApiRes, err error) {
  res = &api.ApiRes{ //实例化返回数据并返回
    UserName: "张三",
    UserAge:  120,
    List:     g.Array{1, 2, 3, 4},
  }
  return
}
```
- 用上述方法返回数据，会自动返回如下格式JSON数据:
``` json
{
    "code":0,
    "message":"",
    "data":{
        "name":"张三",
        "age":120,
        "list":[1,2,3,4]
    }
}
```
以上数据格式是通过中间件`ghttp.MiddlewareHandlerResponse`实现的，实际应用当中可以仿照这一中间件自行定义中间件来确定需要的数据返回格式。

