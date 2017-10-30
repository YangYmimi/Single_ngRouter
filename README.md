# Single_ngRouter

> 2年前写的一个项目，用的是angular的ngRoute模块，结构比较简单，适合demo学习，现在想起来就整理了一下放上来了。

### libs

>　User bower install

+ "angular": "1.2.27",
+ "angular-route": "1.2.27",
+ "angular-translate": "2.4.2"

### About $sce

> angular 从 1.2 版本之后就开始使用　$sce.getTrusted() 去绑定返回值

$sce.trustAs(type, value);

type支持如下类型

```
$sce.HTML           将HTML代码安全的绑定到应用程序中。
$sce.CSS            将CSS样式代码安全的绑定到应用程序中。
$sce.URL            将URL安全的绑定到应用程序中并保证其可用。比如（href，src）
$sce.RESOURCE_URL   将RESOURCE_URL安全的绑定到应用程序中并保证其可用。比如（ng-href，ng-src）
$sce.JS             将JAVASCRIPT代码安全的绑定到应用程序中。
```

另外angular还提供了一些简单的调用方式如：

```
$sce.trustAsResourceUrl(url);
$sce.trustAsHtml(htmlTags);
```
