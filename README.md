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
```
# 创建网站到目录mysite
hugo new site mysite
cd mysite
# 官方示例站点主题
hugo new theme mytheme
# 向站点配置文件中追加一行，指示当前使用的主题。
echo "theme = 'mytheme'" >> hugo.toml
# 启动 Hugo 的开发服务器以查看网站
hugo server
```

# 添加内容
```
# 向您的网站添加一个新页面。
hugo new content/posts/my-first-post.md
# 同时移除主题自带的内容content目录。
rm themes/mytheme/content

# Hugo 会在 content/posts 目录中创建该文件。使用编辑器打开该文件，在文章正文中添加一些 [markdown]，但不要更改 draft 值。
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

# 配置网站
```
# 向您的网站添加一个新页面。
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = '我的新 Hugo 网站'
theme = 'cleanwhite'
```

# 发布网站
```
# 此步骤中，只“发布”网站，但不会 “部署”。
hugo
```

# 部署网站
1. 通过Nginx代理发布的静态网站
2. GitHub Pages






# 制作主题

