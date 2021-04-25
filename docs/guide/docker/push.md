# 推送镜像到中央仓库

```shell
//先登录
docker login

//重新设置镜像tag
docker tag imageName:version username/imageName:version

//之后推送
docker push username/imageName:version
```
