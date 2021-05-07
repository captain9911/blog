---
title: Xcode报错 Could not launch "xxx"
tags: Xcode
key: 2021-05-07-xcode报错couldnotlaunch
---
> 关键词：Xcode报错, 无法启动

### 概述

编译、安装成功后，启动App时弹窗报错。

#### 错误描述

<img src="https://image.oldboard.tech/blog/19944619-B292-4A09-B247-742FA8103634.png" width="300">

Could not launch "xxx"

The operation couldn’t be completed. Unable to launch com.xxx.xxx because it has an invalid code signature, inadequate entitlements or its profile has not been explicitly trusted by the user.

#### 原因分析

* 使用了免费开发者账号编译App。
* 未信任开发者的描述文件。
* 未验证对应的App。

### 解决方法

在手机上进行操作：设置->通用->描述文件与设备管理 

信任对应的描述文件或验证对应的App。
