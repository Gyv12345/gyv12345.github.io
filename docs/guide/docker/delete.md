# Docker批量删除容器和镜像


### 查看所有容器
```shell
docker ps -aq
```
### 停止所有容器

```shell
docker stop $(docker ps -aq)
```
### 删除所有容器

```shell
docker rm $(docker ps -aq)
```
### 删除所有镜像

```shell
docker rmi $(docker images -q)
```
