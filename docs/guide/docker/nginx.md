# Docker安装nginx

### 下载nginx镜像

```shell
docker pull nginx
```

### 创建挂载卷

```shell
mkdir -p /nginx/conf
mkdir -p /nginx/html
mkdir -p /nginx/logs
```

### 创建容器

```shell
docker run -d --name nginx \
--restart=always \
-p 80:80 \
-v /nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /nginx/html:/usr/share/nginx/html \
-v /nginx/logs:/var/log/nginx nginx 
```

