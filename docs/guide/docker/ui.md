# Docker安装portainer(ui)

```shell
 docker run -d -p 9000:9000 \
 --restart=always \
 -v /var/run/docker.sock:/var/run/docker.sock \
 --name prtainer \
 portainer/portainer
```

