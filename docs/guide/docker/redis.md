# Docker安装redis

### 命令

```shell
docker run -d -p 6379:6379 \
-v /root/redis/redis.conf:/usr/local/etc/redis/redis.conf \
--name redis redis redis-server /usr/local/etc/redis/redis.conf
```

### 配置文件 redis.conf

```shell
bind 0.0.0.0
daemonize NO
protected-mode no
appendonly yes
#requirepass 123456 
```

