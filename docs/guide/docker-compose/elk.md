# 使用docker-compose安装ELK

### 编写docker-compose.yml文件

```yaml
services:
  elasticsearch:
    image: elasticsearch:7.8.0
    container_name: elasticsearch
    user: root
    environment:
      - "cluster.name=elasticsearch" #设置集群名称为elasticsearch
      - "discovery.type=single-node" #以单一节点模式启动
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m" #设置使用jvm内存大小
      - TZ=Asia/Shanghai
    volumes:
      - ./elk/elasticsearch/plugins:/usr/share/elasticsearch/plugins #插件文件挂载
      - ./elk/elasticsearch/data:/usr/share/elasticsearch/data #数据文件挂载
    ports:
      - 9200:9200
      - 9300:9300
  kibana:
    image: kibana:7.8.0
    container_name: kibana
    links:
      - elasticsearch:es #可以用es这个域名访问elasticsearch服务
    depends_on:
      - elasticsearch #kibana在elasticsearch启动之后再启动
    environment:
      - "elasticsearch.hosts=http://es:9200" #设置访问elasticsearch的地址
      - "I18N_LOCALE=zh-CN"
      - TZ=Asia/Shanghai
    ports:
      - 5601:5601
  logstash:
    image: logstash:7.8.0
    container_name: logstash
    user: root
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - ./elk/logstash/logstash.conf:/usr/share/logstash/pipeline/logstash.conf #挂载logstash的配置文件
    depends_on:
      - elasticsearch #kibana在elasticsearch启动之后再启动
    links:
      - elasticsearch:es #可以用es这个域名访问elasticsearch服务
    ports:
      - 4560:4560
      - 4561:4561
      - 4562:4562
      - 4563:4563
```

### 编写logstash.conf

```
input {
  tcp {
	add_field => {"service" => "demo"}
    mode => "server"
    host => "0.0.0.0"
    port => 4560
    codec => json_lines
  }
}
filter{
  if [type] == "record" {
    mutate {
      remove_field => "port"
      remove_field => "host"
      remove_field => "@version"
    }
    json {
      source => "message"
      remove_field => ["message"]
    }
  }
}
output {
  if [service] == "demo"{
    elasticsearch {
      hosts => "es:9200"
      index => "ysg-demo-%{+YYYY.MM.dd}"
    }
   }
}
```

### 执行启动命令

```shell
docker-compose up
docker-compose down
```

### 第一次启动

第一次启动以后，会打印日志信息，并且有报错，主要原因是没有权限，需要进行设置777文件夹权限，并且将logstash.conf复制到对应文件夹下。

### 授权文件夹

```shell
chmod 777 ./elk/elasticsearch/data
```

### 再一次启动

```shell
docker-compose up
#或者
docker-compose up -d
```

