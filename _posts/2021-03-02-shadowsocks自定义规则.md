---
title: Shadowsocks PAC模式自定义规则
tags: Tools
key: 2021-03-02-shadowsocks自定义规则
---

Shadowsocks使用PAC自动模式时，访问一个网站到底走不走代理，并不完全像我们期望的那样。这时候就需要手动进行干预。

### 编辑PAC规则
点击菜单栏shadowsocks图标，在下拉窗口里选择“代理设置->编辑PAC用户自定规则...”。

<img src="https://image.oldboard.tech/blog/shadowsocks-pac.jpg" width="400">

<img src="https://image.oldboard.tech/blog/shadowsocks-pacedit.png" width="600">

### 常用规则说明
#### * 标记
通配符。*可以表示任何字符串，任何满足条件的都会走代理。  
如：
```
*.example.com/*
```
表示：
```
https://www.example.com
https://image.example.com
https://image.example.com/abcd
```
等，都会走代理。 

#### @@ 标记
例外规则，任何满足 @@后面规则的地址，都不会走代理。  
如：
``` 
@@*.example.com/\*
``` 
表示：
```
https://www.example.com
https://image.example.com
https://image.example.com/abcd
```
等，都不会走代理。

#### || 标记  
只匹配域名的结尾。  
如：
```
||example.com
```
表示：
``` 
http://example.com/abcd
https://example.com
ftp://example.com 
```
等，都会走代理。

#### | 标记
匹配地址的开头和结尾。  
如：
```
|https://example.com
```
表示以 https://example.com 开头的地址会走代理。
```
example.com|
```
表示以 example.com 结尾的地址会走代理。

#### ! 标记
注释。  
如：
```
! 这是一行注释
! ||example.com
```
! 后面的内容表示注释，以!开头的规则也会无效。

### 示例
<img src="https://image.oldboard.tech/blog/shadowpaceditend.png" width="600">

### 注意
每行只能写一条规则。修改PAC规则后，需要将shadowsocks关闭后重新打开，才会生效。
