---
title: Xcode报错Could not load NIB in bundle
tags: Xcode
key: 2021-05-29-xcode_xib_error
---
> 关键词：xcode, bundle, xib, nib

### 概述

加载xib时，运行时崩溃。

### 问题原因

在bundle下未找到对应的xib文件。

### 解决方法

打开xib，在 Target Membership 下勾选对应的 Target。

<img src="https://image.oldboard.tech/blog/30068C91-2BDD-4E04-8950-1D20D55CCC0A.png" width="400">



