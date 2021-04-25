# Docker安装mysql

```shell
docker run -p 3306:3306 \
--name mysql \
-v /data/mysql/conf:/etc/mysql/conf.d \
-v /data/mysql/logs:/logs \
-v /data/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-d mysql
```
### 进入容器

```shell
docker exec -it mysql bash
```
### 设置远程登录

```shell
mysql -u root -p
--授权并创建了用户
GRANT ALL ON *.* TO 'root'@'%';
flush privileges;
--更新加密规则
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
flush privileges;
```
