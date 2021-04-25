# spring boot 项目的结构

约定大于配置，这是当年我开始学习maven经常看到的一句话。简单来说，不管是对于maven也好，还是对于spring boot也好，目录结构已经规定好了。只要按照相对应的目录结构去创建文件，那么这些文件立马就可以进行使用。反之，需要你自行的去进行配置。

### 结构

```java
├─src
│  ├─main        
│  │  ├─java     代码
│  │  └─resources   配置文件
│  │      ├─static       静态资源
│  │      └─templates     模板
│  └─test
│      └─java     测试代码
```



一个基本spring boot项目就长成这样，而这样的结构就是约定成俗的，只要按照对应目录放置对应的文件，一个spring boot项目就能轻松的运行起来.