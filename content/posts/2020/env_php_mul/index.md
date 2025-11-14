---
title: 「学习笔记」环境配置 - PHP多版本共存
date: 2020-12-29 21:07:05
tags: [Linux, 运维与DevOps, 学习笔记]
categories: [运维与DevOps]
series: 运维与DevOps
---

前提条件：Linux系统中已有php7版本且在运行项目，新项目需要php7版本且在同一个系统中。
> PHP多版本共存需要编译安装以指定安装目录

### 下载安装 php-8.3.0
``` shell
cd /application/php8
wget https://www.php.net/distributions/php-8.3.0.tar.gz
tar -zxvf php-8.3.0.tar.gz
cd php-8.3.0
```

### 系统依赖
``` shell
yum install gcc autoconf gcc-c++ -y
yum install -y libxml2 libxml2-devel openssl openssl-devel bzip2 bzip2-devel libcurl libcurl-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel gmp gmp-devel readline readline-devel libxslt libxslt-devel
yum install -y systemd-devel
yum install -y openjpeg-devel
```

### 配置
``` shell
cd php-8.3.0
./configure  --prefix=/application/php8  --with-config-file-path=/application/php8/etc  --enable-mbstring  --enable-xmlreader  --enable-xmlwriter  --enable-soap  --enable-calendar  --with-curl  --with-zlib  --with-pdo-sqlite  --with-pdo-mysql  --with-mysqli  --with-mysql-sock  --enable-mysqlnd  --disable-rpath  --enable-inline-optimization  --with-bz2  --with-zlib  --enable-sockets  --enable-sysvsem  --enable-sysvshm  --enable-pcntl  --enable-mbregex  --enable-exif  --enable-bcmath  --with-mhash  --enable-gd  --with-openssl  --enable-ftp  --with-kerberos  --with-gettext  --with-xmlrpc  --with-xsl  --enable-fpm  --with-fpm-user=php-fpm  --with-fpm-group=php-fpm  --with-fpm-systemd  --disable-fileinfo  --with-jpeg=/usr/include  --with-freetype=/usr/include/freetype2
```

### 编译安装
``` shell
make && make install
```

### 配置步骤
#### 1、php.ini
``` shell
cp php.ini-production /application/php8/etc/php.ini
```

#### 2、php-fpm.conf
``` shell
cd /application/php8/etc
cp php-fpm.conf.default php-fpm.conf
vim php-fpm.conf

error_log = /application/php8/var/php-fpm.log
pid = /application/php8/var/run/php-fpm.pid
```

#### 3、www.conf
``` shell
cd /application/php8/etc/php-fpm.d/
cp www.conf.default www.conf
vim www.conf

[www]
user = nobody
group = nobody
listen = 127.0.0.1:9002
```

- 基于tcp，即IP+port的形式 listen = 127.0.0.1:9002
- 默认是9000端口，由于已有php7监听9000端口，于是将端口改为9002；
- 相应在vhost中需要配置fastcgi_pass 127.0.0.1:9002;

#### 4、nginx.conf
``` shell
location ~ \.php$ {
	root /data/wwwroot/order/public;
	fastcgi_pass   127.0.0.1:9002;
	fastcgi_index  index.php;
	include        fastcgi.conf;
}
```

#### 5、fpm-service
``` shell
cd /application/php8/php-8.3.0
cp ./sapi/fpm/init.d.php-fpm /etc/init.d/php8-fpm
chmod +x /etc/init.d/php8-fpm
cp ./sapi/fpm/php-fpm.service /usr/lib/systemd/system/php8-fpm.service
```

### 扩展安装方法
``` shell
cd /application/php8/php-8.3.0/ext/fileinfo && /application/php8/bin/phpize && ./configure --with-php-config=/application/php8/bin/php-config && make && make install 
```

### 验证PHP8
``` shell
/application/php8/bin/php -v
```

### 启动php8-fpm，重新运行nginx，即可进行通信
``` shell
systemctl start php8-fpm
systemctl restart nginx
```
