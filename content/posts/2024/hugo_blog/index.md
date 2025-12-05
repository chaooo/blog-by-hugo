---
title: 「博客搭建」从 Hexo 转向 Hugo：静态博客迁移
date: 2024-01-05T13:58:27+08:00
tags: [博客搭建, Hugo]
categories: [博客搭建]
draft: false
---


多年前从`Hexo`开启博客之旅。当时被它丰富的主题生态、基于`Node.js`环境并轻松部署到`GitHub Pages`的特性所吸引。
然而随着时间推移，博客文章逐渐累积，逐渐感受到了`Hexo`构建速度的瓶颈。 直到接触了`Hugo`，号称“世界上最快的网站构建框架”，使用`Go`语言编写，千篇文档秒级生成，构建速度更快，内存消耗也更低。

从`Hexo`迁移到`Hugo`虽然需要一些初期投入，但带来的性能提升和开发体验改善是显著的。Hugo文档详细，学习曲线平缓。
- [Hugo官方文档](https://gohugo.io/documentation/)
- [Hugo中文文档](https://hugo.opendocs.io/getting-started/)

## 迁移前准备工作
1. 内容备份
    - 文章源文件（`source/_posts/`）
    - 主题配置文件（`_config.yml` 和主题目录）
    - 图片等静态资源
2. 环境配置
   - 先决条件：在使用`Hugo`时常常需要使用到`Git`、`Go`和`Dart Sass`。
   - 下载`Hugo`：
      - 预编译的二进制文件可用于多种操作系统和架构。访问[最新发布版本](https://github.com/gohugoio/hugo/releases)页面，并向下滚动至“Assets”部分。
      - 下载对应操作系统的最新版本压缩文件，然后解压到目标目录，并将该目录添加到`PATH`环境变量中。
   - 验证安装：
       ```bash
       hugo version
       ```

## 内容迁移
1. 创建`Hugo`站点
    ```bash
    hugo new site myblog
    cd myblog
    ```
2. 批量处理`Markdown`文件（`hexo-posts/*.md`）
    - **手动调整 Front Matter**：
       - Hexo 的 `title:` → Hugo 保留
       - `date:` → 格式改为 `2024-01-02T15:04:05+08:00`
       - `tags:` → Hugo 支持相同语法（`tags: ["tag1","tag2"]`）
       - 删除 Hexo 特有字段（如 `categories:` 建议改为 Hugo 的 `categories`）
    - **自动转换工具**（可选）：
       - 使用 Python 脚本批量修改 Front Matter
       - 工具推荐：https://github.com/wangchucheng/hugo-hexo
3. 复制文章到`Hugo`
    - 将`Hexo`的`_posts`复制到`Hugo`的`content/posts/`。
4. 静态资源处理
    - `Hexo`的`source/images/`复制到`Hugo`的`static/images/`。
    - 文章中图片路径改为：`![alt](/images/example.png)`。


## 主题与配置
1. 选择并安装主题：将`Ananke`主题克隆到`themes`目录中，并将其作为Git子模块 添加到项目中。
   ```bash
   git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
   ```
2. 向站点配置文件中追加一行，指示当前使用的主题。
   ```bash
   echo "theme = 'ananke'" >> hugo.toml
   ```
3. 手动配置 `hugo.toml`
   ```toml
   baseURL = "https://yourdomain.com/"
   languageCode = "zh-CN"
   defaultContentLanguage = "zh"
   theme = "ananke"
   
   [params]
     title = "博客名称"
     description = "博客描述"
   
   [menu]
     [[menu.main]]
       name = "首页"
       url = "/"
       weight = 1
   ```

## 构建与发布
1. 添加新文章
   ```bash
   hugo new content/posts/new-post.md
   ```
2. 文章`Front Matter`示例
   ```yaml
   title: "文章标题"
   date: 2024-01-15T14:30:00+08:00
   tags: ["标签1", "标签2"]
   categories: ["分类"]
   draft: true
   ```
3. 运行包含草稿内容
   ```bash
   hugo server -D # 或 hugo server --buildDrafts
   ```
4. 发布网站：`Hugo`会在项目根目录的`public`目录中创建整个静态网站。
   ```bash
   hugo
   ```
5. 托管和部署
   - `Hugo`渲染的是静态网站，可以在任何地方托管`Hugo`网站。
   - [Hugo托管和部署文档](https://hugo.opendocs.io/hosting-and-deployment/)
