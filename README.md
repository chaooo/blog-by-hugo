# 前提条件
1. [安装 Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)。
2. [安装 Hugo](https://hugo.opendocs.io/installation/)（扩展版，版本 v0.112.0 或更高） 。
    - Windows包管理器Winget安装：`winget install Hugo.Hugo.Extended`
    - 安装成功，查看版本：`hugo version`
> Windows用户：
> - 不要使用命令提示符 和 Windows PowerShell。
> - 在 [PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows) 或 Linux 终端（如WSL或Git Bash）中运行这些命令。
    > PowerShell 和 Windows PowerShell [是不同的应用程序](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell?view=powershell-7.3)。

# 创建网站
打开命令行，执行如下命令：
```
# 创建网站到目录mysite
hugo new site mysite
```

执行如下命令，生成一套主题脚手架：
```
cd mysite
# 创建示例站点主题
hugo new theme mytheme
# 向站点配置文件中追加一行，指示当前使用的主题。
echo "theme = 'mytheme'" >> hugo.toml
# 启动 Hugo 的开发服务器以查看网站
hugo server
```

# 添加内容
hugo Cli工具支持hugo new命令生成markdown文件
```
# 向您的网站添加一个新页面。
hugo new content/posts/my-first-post.md
# 同时移除主题自带的内容content目录。
rm themes/mytheme/content
```

hugo生成markdown文件时查找对应模板首是先从项目根路径下的archetypes文件夹里找。这个文件夹里也是只有一个default.md文件，里面的内容是：
```
+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
+++
```

所以hugo会在content/posts目录中生成my-first-post.md
```
# 使用编辑器打开该文件，在文章正文中添加一些 [markdown]，但不要更改 draft 值。
+++
title = 'My First Post'
date = 2024-05-27T13:38:28+08:00
draft = true
+++

## 简介
这是 **粗体** 文本，这是 *斜体* 文本。
```

> - 注意 [front matter] 中的 draft 值为 true。默认情况下，Hugo 在构建网站时不会发布草稿内容。了解更多关于草稿、将来和过期内容的信息。
> - 您可以运行以下命令之一来包含草稿内容。`hugo server --buildDrafts`，`hugo server -D`。

# 自定义内容模板
雏形模板（[Archetypes](https://hugo.opendocs.io/content-management/archetypes/)）是指放在archetypes文件夹里的文件，里面可以预定义一些元信息，也可以提前写好一些内容生成逻辑，或其他什么内容。当执行hugo new命令来生成内容文件的时候，就会调用对应内容类型的模板文件来帮你自动生成一些内容。
假如以posts作为内容类型，生成posts文件时模板的查找路径依次是：
1. archetypes/posts.md
2. archetypes/default.md
3. themes/mytheme/archetypes/posts.md
4. themes/mytheme/archetypes/default.md

# Taxonomies 分类体系
分类体系（Taxonomies）表示作者对内容的一套或多套分类。比如标签（tags）、类目（categories）、归档（archives）等。分类体系需在项目根路径下配置文件中定义，例如在config.toml文件中加入：
```
[taxonomies]
    tag = "tags"
    category = "categories"
    archive = "archives"
```

# 配置网站
config.toml 或 hugo.toml
```
baseURL = '/'
languageCode = 'en-us'
title = '我的新 Hugo 网站'
theme = 'mytheme'
preserveTaxonomyNames = true
paginate = 10 #frontpage pagination
hasCJKLanguage = true

[outputs]
home = ["HTML", "RSS"]

[params]
hero_bg = "img/home-bg-road.jpg"
SEOTitle = "wubin1989的博客 | wubin1989 Blog"
description = "wubin1989，程序员, 摄影爱好者, 背包客 | 这里是 wubin1989 的博客，边走边看，边读边写。"
keyword = "wubin1989, wubin1989, wubin1989的网络日志, wubin1989的博客, wubin1989 Blog, 博客, 个人网站, 互联网, Web, Nodejs, Reactjs, SaaS, Golang, 微服务, Microservice"
slogan = "跨过高山，走过四季，不忘初心，永不言弃"
brief_info = "全栈工程师/背包客/摄影爱好者"
info = "常年写reactjs、vuejs、java和golang，专注微服务架构和devops相关，喜欢旅游、爬山、外语"
avatar = "img/avatar-wubin1989.jpg" 

image_404 = "img/404-bg.jpg"
title_404 = "你来到了没有知识的荒原 :("

[taxonomies]
tag = "tags"
category = "categories"
archive = "archives"
```


# layouts网站布局
跟网站整体框架布局相关的文件都放在layouts里面。打开themes/mytheme/layouts/_default文件夹里的baseof.html文件。这个文件里配置了网站的header、main和footer等。
```
<!DOCTYPE html>
<html>
<head>
  {{ partial "head.html" . }}
</head>
<body>
  <header>
    {{ partial "header.html" . }}
  </header>
  <main>
    {{ block "main" . }}{{ end }}
  </main>
  <footer>
    {{ partial "footer.html" . }}
  </footer>
</body>
</html>
```
代码里涉及的文件head.html、header.html、side.html和footer.html文件都放在partial文件夹里。
```
<!-- 例如： head.html -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>{{ if .IsHome }}{{ site.Title }}{{ else }}{{ printf "%s | %s" .Title site.Title }}{{ end }}</title>
{{ partialCached "head/css.html" . }}
{{ partialCached "head/js.html" . }}
```

```
<!-- 例如： header.html -->
<h1>{{ site.Title }}</h1>
{{ partial "menu.html" (dict "menuID" "main" "page" .) }}
```


# hugo变量和函数
## 变量
- `site/.Site`: 全局对象
- `.Title`: 文章标题
- `.IsHome`: 是否是网站首页
- `.Type`: 内容的类型
- `.IsPage`: 是否是"page"类型
- `.TableOfContents`: hugo可以自动从markdown文件中解析出目录渲染到页面里
- `.Content`: hugo从markdown中解析出的文章内容
- `.PrevInSection`: 前一篇文章
- `.NextInSection`: 下一篇文章
- `.Scratch`: 类似字典，可以设置键值对，作用域就是当前页面，可以在页面的其他地方通过.Scratch.Get获取值。
- `.Site.Taxonomies.categories`: config.toml文件里的[taxonomies]的category配置。
- `.Site.Title`: config.toml文件里的title的配置
- `.Site.BaseURL`: config.toml文件里的baseURL的配置
- `.Site.Params.keywords`: config.toml文件里的[params]的keyword配置
- `.Site.RegularPages`: 表示所有"Kind"属性是"page"的内容页面(.Kind属性:home,page,section,taxonomy,term)
- `.Params`: 返回给定页面前置元数据中定义的自定义参数映射.

## 函数
- `relURL`: 将输入值转换为相对路径的url
- `absURL`: 将输入值转换为绝对路径的url
- `relLangURL`: 将输入值转换为以正确的语言变量值为前缀的相对路径的url，多语言网站才会用到
- `urlize`: 将输入值编码成url路径，同时把空格改成中横线"-"
- `title`: 将输入值转换为首字母大写的标题
- `.Date.Format`: 日期时间格式化
- `where`: 从一组集合中查询出符合条件的元素，非常有用，详细用法请参考hugo文档的这一页。一般情况，where函数是用来从.Site.Pages集合或者是.Pages集合里做查询。关于.Site.Pages和.Pages的区别请参考hugo文档的这一页
- `.GroupByDate`: 按内容文件的元信息里的date属性来对内容页面做分组，参数是日期时间格式化字符串，返回值是一个字典类型的值，包含.Key和.Pages属性
- `.Paginate`: 传入通过where函数返回的页面集合，生成Paginator分页器，可以用来构建分页组件.
- `.Param`: 从内容文件的元信息（front matter）里取出参数值为属性名的属性值，如果找不到，再从项目配置文件（config.toml）里找。


# 发布网站
```
# 此步骤中，只“发布”网站，但不会 “部署”。
hugo
```

# 部署网站
[托管和部署](https://hugo.opendocs.io/hosting-and-deployment/)

