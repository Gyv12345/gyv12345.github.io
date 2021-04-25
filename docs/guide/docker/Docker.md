# Centos7使用yum安装Docker



### 更新yum

```shell
sudo yum update
```

### 安装必要的工具

```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 添加软件源信息

```shell
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 更新并安装Docker-CE

```shell
sudo yum makecache fast
sudo yum -y install docker-ce
```

### 开启Docker服务

```shell
sudo service docker start
```

### 让Docker服务开机启动

```shell
sudo systemctl enable docker.service
```

