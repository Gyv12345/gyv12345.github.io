# mybatis-plus配置

### 配置分页和乐观锁插件

```java
@Configuration
public class MyabtisPlusConfig {

    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor() {
        return new OptimisticLockerInterceptor();
    }

    @Bean
    public PaginationInterceptor paginationInterceptor() {
        PaginationInterceptor paginationInterceptor = new PaginationInterceptor();
        // 设置请求的页面大于最大页后操作， true调回到首页，false 继续请求  默认false
        // paginationInterceptor.setOverflow(false);
        // 设置最大单页限制数量，默认 500 条，-1 不受限制
        // paginationInterceptor.setLimit(500);
        // 开启 count 的 join 优化,只针对部分 left join
        paginationInterceptor.setCountSqlParser(new JsqlParserCountOptimize(true));
        //租户隔离
        TenantSqlParser tenantSqlParser = new TenantSqlParser()
                .setTenantHandler(tenantHandler);
        paginationInterceptor.setSqlParserList(CollUtil.toList(tenantSqlParser));
        paginationInterceptor.setSqlParserFilter(sqlParserFilter);
        return paginationInterceptor;
    }


}
```

### 显示sql信息 配置application.yml

```yaml
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

