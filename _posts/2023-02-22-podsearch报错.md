---
title: pod search 报错 libjingle_peerconnection
tags: CocoaPods
key: 2023-02-22-podsearch报错
---
> 关键词：Xcode, Git, 代码回滚

## pod search 报错

	――― MARKDOWN TEMPLATE ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
	
	### Command
	
	```
	/usr/local/bin/pod search libjingle_peerconnection
	```
	
	[!] Oh no, an error occurred.

## 原因

Mac为M1处理器。

## 修复方法

	sudo arch -x86_64 gem install ffi	

## 使用

例如：

	arch -x86_64 pod search DCBase
	arch -x86_64 pod install
