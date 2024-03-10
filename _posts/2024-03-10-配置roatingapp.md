---
title: 配置 Roating App
tags: iOS
key: 2024-03-10-配置roatingapp
---
> 关键词：roatingapp, appstoreconnect

## 配置 Roating App 流程

### 添加Map配置

选中工程文件：

<img src="https://image.oldboard.tech/blog/202312180935464.png"/>

选中app对应的target（名称不以`Tests`结尾）：

<img src="https://image.oldboard.tech/blog/202312180937131.png"/>

选中`SignIng & Capabilities`：

<img src="https://image.oldboard.tech/blog/202312180938518.png"/>

点击`Capability`：

<img src="https://image.oldboard.tech/blog/202312180942636.png"/>

搜索`map`，双击搜索到的`Maps`：

<img src="https://image.oldboard.tech/blog/202312180944747.png"/>

会新增这一块区域，在`Rourting`中勾选`Bike`：

<img src="https://image.oldboard.tech/blog/20240310172638.png"/>

### 修改info.plist文件

选中`info.plist`文件：

<img src="https://image.oldboard.tech/blog/20231218100037.png"/>

在`info.plist`文件中找到这一行并删除：

<img src="https://image.oldboard.tech/blog/20231218095622.png"/>
