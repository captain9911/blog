---
title: AFNetworking请求报错 Error Domain=NSURLErrorDomain Code=-1202 "此服务器的证书无效。...
tags: iOS
key: 2021-04-22-afnetworking请求报错
---
> 关键词：AFNetworking, SSL, https

### 概述

使用AFNetworking进行网络请求时报错。

#### 错误描述

Error Domain=NSURLErrorDomain Code=-1202 "此服务器的证书无效。您可能正在连接到一个伪装成“xxx”的服务器，这会威胁到您的机密信息的安全。" UserInfo={...

#### 原因分析

* 服务端使用了自签名SSL证书。
* 客户端没有相应的证书，直接进行https请求。

### 解决方法

这里使用了一个客户端直接忽略SSL证书验证的方法。<a href="https://www.oldboard.tech/2021/04/22/afnetworking%E5%BF%BD%E7%95%A5ssl%E8%AF%81%E4%B9%A6%E9%AA%8C%E8%AF%81.html">点击查看</a>
