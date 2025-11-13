---
title: "Sourcetree报错 Failed to connect to 127.0.0.1 port 1086: Connection refused"
tags: Other
key: 2021-04-05-sourcetree报错unableToAccess
---
> 关键词：sourcetree, 报错, Shadowsocks

### pull或push时报错

`fatal: unable to access 'https://github.com/xxx/xxx.git/': Failed to connect to 127.0.0.1 port 1086: Connection refused`

### 报错原因

设置了git全局代理，且Shadowsocks未打开。

### 解决方法

打开Shadowsocks，或关闭git全局代理。

关闭git全局代理的方法见：<a href="https://blog.oldboard.tech/2021/03/27/git%E4%BD%BF%E7%94%A8%E4%BB%A3%E7%90%86.html">Git使用代理</a>

