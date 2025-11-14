---
title: 「学习笔记」环境配置 - 本地开发环境配置笔记
date: 2020-12-30 15:12:24
tags: [Linux, 运维与DevOps, 学习笔记]
categories: [运维与DevOps]
series: 运维与DevOps
---

### 一、Git仓库配置
1. 设置Git的user name和email：
``` bash
git config --list
git config --global user.name "chaoo"
git config --global user.email "chaoles@foxmail.com"
```

2. 生成SSH密钥
   - 查看是否已经有了ssh密钥：`cd ~/.ssh`，如果没有密钥则不会有此文件夹，有则备份删除
   - 生存密钥：
``` bash
ssh-keygen -t rsa -C "chaoles@foxmail.com"
```
按3个回车，密码为空。最后得到了两个文件：`id_rsa`和`id_rsa.pub`

3. Git同时提交多个仓库
``` bash
git remote rm origin  // 删除现有远程仓库

git remote add origin '仓库地址1'
git remote set-url --add origin '仓库地址2'
git push -u origin master # 同时推送
git remote -v             # 查看远程库及地址
```

4. push失败时，需要紧急提交可关闭语法检查
``` bash
git commit --no-verify -m "no verify commit"
```


### 二、JAVA开发环境配置
1. 下载[JAVA](https://www.oracle.com/cn/java/technologies/downloads/#jdk17-windows)安装
2. 下载[Maven](https://dlcdn.apache.org/maven/maven-3/3.9.2/binaries/apache-maven-3.9.2-bin.zip)解压
3. 配置环境变量（windows->系统->高级系统设置->环境变量）
   - 系统变量添加：
       + JAVA_HOME：`D:\lang\Java\jdk-17`
       + MAVEN_HOME：`D:\lang\apache-maven-3.9.2`
       + CLASSPATH：`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`
   - 用户变量添加Path：
       + `%JAVA_HOME%\bin`
       + `%JAVA_HOME%\jre\bin`
       + `%MAVEN_HOME%\bin`

4. Maven的conf文件夹下的settings.xml文件进行修改：
``` xml
<!-- 配置本地仓库文件存放位置 -->
<localRepository>D:\lang\apache-maven-3.9.2\localRepository</localRepository>
<mirrors>
    <!-- 配置阿里云镜像仓库 -->
    <mirror>
      <id>alimaven</id>
      <mirrorOf>aliyun maven</mirrorOf>
      <name>http://maven.aliyun.com/nexus/content/groups/public/</name>
      <url>central</url>
    </mirror>
</mirrors>
```

5. 在IDEA中配置Maven；打开settings ，选择Build ，Execution这个选项的Maven选项即可



### 三、前端开发环境配置
#### 3.1 NodeJS配置
1. 安装[nodejs](https://nodejs.org/)
2. 安装[yarn](https://classic.yarnpkg.cn/docs/install#windows-stable)
    - 命令：`npm install --global yarn`
    - 使用Yarn创建Vite项目:`yarn create vite [project-name]`
3. 或安装[pnpm](https://pnpm.io/zh/installation)
    - 命令：`npm install -g pnpm`
    - 使用PNPM创建Vite项目:`pnpm create vite [project-name]`
4. 编辑器安装ESLint代码质量检查 和 Prettier格式化代码风格
5. 安装状态管理库 pinia：`yarn add pinia`
    - 在使用 Pinia 时候，在 Vue.js3 应用挂载 DOM 节点前，使用Pinia 插件

``` JavaScript
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';

const app = createApp(App);
const pinia = createPinia();
// 加载pinia插件
app.use(pinia);
// 挂载 DOM
app.mount('#app');
```
6. idea可以集成vite
7. vue3后台管理模板
    - [vue3-element-admin](https://gitee.com/youlaiorg/vue3-element-admin)是基于 Vue3 + Vite4+ TypeScript5 + Element-Plus + Pinia 等最新主流技术栈构建的后台管理前端模板。

    
#### 3.2 PNPM配置
1. 把`E:\.pnpm-store`替换成PNP全局安装的路径
``` bash
pnpm config set global-bin-dir "E:\.pnpm-store"
pnpm config set cache-dir "E:\.pnpm-store\cache"
pnpm config set state-dir "E:\.pnpm-store\state"
pnpm config set global-dir "E:\.pnpm-store\global"

pnpm config set store-dir "D:\pnpm\storeDir" # pnpm全局仓库路径(类似 .git 仓库)
pnpm config set global-dir "D:\pnpm\globalDir" # pnpm全局安装路径
pnpm config set global-bin-dir "D:\pnpm\globalBinDir" # pnpm全局bin路径
pnpm config set state-dir "D:\pnpm\state" # pnpm创建pnpm-state.json文件的目录
pnpm config set cache-dir "D:\pnpm\cache" # pnpm全局缓存路径

```
OR：
修改 C:\Users\<User>\AppData\Local\pnpm\config\rc或者C:\Users\<User>\.npmrc文件

验证设置是否正确:
``` bash
pnpm c get
```


### 四、Windows虚拟机安装配置
#### 4.1 虚拟机安装
1. 安装`VMware Workstation`并激活。
2. 下载`CentOS-7-x86_64-DVD-1708.iso`镜像文件:[www.centos.org](www.centos.org)
3. `打开VMware` --> `文件` --> `新建虚拟机` --> `自定义高级`
4. `安装程序光盘镜像文件(iso)(M)` --> `选择镜像文件(不要出现中文路径)` --> `虚拟机重命名(可以默认)，选择安装位置`
5. `使用网络地址转换(NAT)` --> `LSI Logic` --> `SCSI` --> `创建新虚拟磁盘` --> `将虚拟磁盘拆分多个文件` --> `下一步至【完成】`

#### 4.2 配置Linux系统
1. `启动虚拟机` --> `Install CentOS 7` --> `【Enter】` --> `【Enter】`
2. `中文` --> `简体中文` --> `【继续】`--> `安装位置` --> `【完成】`
3. `【开始安装】` --> `ROOT密码` -->`【完成】` -->  `创建用户` --> `【完成】` --> `【重启】`
4. `输入设置的用户名和密码` --> `登录成功`

#### 4.3 配置网络环境
1. 点击虚拟机左侧，选中安装的系统，右键，设置
2. `【硬件】` --> `【网络适配器】` --> `【NAT...】` --> `【确定】`
3. 点击虚拟机左侧，选中安装的系统，`【编辑】` --> `【虚拟网络编辑器】`
4. `【VMnet8】` --> `【NAT设置】` --> `查看本地IP网段`
5. `【DHCP设置】` --> `查看IP起止段(方便设置IP地址)`
6. 进入命令窗口，切换到root的根目录，输入命令：`vi /etc/sysconfig/network-scripts/ifcfg-ens33`
7. `【i】` --> `修改如下参数` --> `【Esc】` --> `【:wq!】` --> `【回车键】保存退出`

``` shell
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static       #静态IP，重启后IP不会变化
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33
UUID=默认即可
DEVICE=ens33
ONBOOT=yes              #开机即生效
IPADDR=192.168.168.226  #IP地址，步骤5的 IP起止段范围内
NETMASK=255.255.255.0   #子网掩码
GATEWAY=192.168.168.2   #网关，步骤4的 本地IP网段
DNS1=114.114.114.114    #外网DNS
```

8. 保存后，重启`network`服务：`service network restart`
9. 配置完毕后，查询IP信息，并确认是否网络畅通
``` shell
if config
ping 192.168.168.1
ping 192.168.168.2
ping www.baidu.com
```


### 五、CentOs7安装JDK
[官网下载](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)`jdk-8u231-linux-x64.rpm`到`/usr/java`
1. 添加执行权限:
``` shell
cd /usr/java
chmod +x jdk-8u231-linux-x64.rpm
```

2. 执行rpm命令安装:
``` shell
rpm -ivh jdk-8u231-linux-x64.rpm
```

3. 查看是否安装成功：
``` shell
java -version
 
java version "1.8.0_231"
Java(TM) SE Runtime Environment (build 1.8.0_231-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.231-b11, mixed mode)
```

4. 修改环境变量
``` shell
vim /etc/profile
```
最尾输入以下内容：
``` shell
export JAVA_HOME=/usr/java/jdk1.8.0_231-amd64
export JAVA_BIN=/usr/java/jdk1.8.0_231-amd64/bin
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export JAVA_HOME JAVA_BIN PATH CLASSPATH
```


### 六、安装配置Nginx
#### 6.1 配置 EPEL源
``` shell
sudo yum install -y epel-release
sudo yum -y update
```

#### 6.2 安装Nginx
``` shell
sudo yum install -y nginx
```
安装成功后，默认的网站目录为： `/usr/share/nginx/html`
默认的配置文件为：`/etc/nginx/nginx.conf`
自定义配置文件目录为: `/etc/nginx/conf.d/`

#### 6.3 开启端口80和443
如果服务器打开了防火墙，需要运行下面的命令，打开`80`和`443`端口。
``` shell
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

如果你的服务器是**阿里云ECS**，你还可以通过控制台安全组，打开`80`和`443`端口，或者其他自定义端口。
- 具体操作路径： `阿里云ECS服务器` -> `安全组` -> `配置规则` -> `安全组规则` -> `入方向` -> `添加安全组规则`
  端口范围： 比如你要打开80端口，这里就填写 80/80 。
  优先级： 优先级可选范围为1-100，默认值为1，即最高优先级。

#### 6.4 操作Nginx
``` shell
systemctl start nginx   # 启动 Nginx
systemctl stop nginx    # 停止Nginx
systemctl restart nginx # 重启Nginx
systemctl status nginx  # 查看Nginx状态
systemctl enable nginx  # 启用开机启动Nginx
systemctl disable nginx # 禁用开机启动Nginx
```
