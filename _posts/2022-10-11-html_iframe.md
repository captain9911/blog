---
title: HTML_iframe_内联框架
tags: HTML
key: 2022-10-11-html_iframe
---
> 关键词：html, iframe, 内联框架

### 用途

* 用户将指定的页面显示在框架中。
* 旧版浏览器不支持iframe则不会显示。

### 使用示例

```
<p>旧版浏览器不支持iframe则不会显示</p>
<iframe src="https://www.csdn.net/" width="200" height="100"></iframe>
<p>这是一个去掉边框的内联框架</p>
<iframe src="https://www.csdn.net/" width="300" height="200" frameborder="0"></iframe>
```

### 用内联框架来显示链接指向的内容

```
<iframe src="http://www.baidu.com" name="ifr" width="200" height="100"></iframe>
<p>点击<a href="http://www.w3cschool.cn" target="ifr">这个链接</a>，链接的内容会显示在内联框架中。</p>
```
