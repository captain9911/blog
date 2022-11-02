---
title: Xcode创建和使用代码片段
tags: Xcode
key: 2022-11-02-CodeSnippet
---
> 关键词：CodeSnippet, 代码片段, xcode

## 创建和使用

### 编辑代码

如果要实现这种空位输入的样式，需要将位置用<##>包裹起来。

例如<#name#>，其中name可以自定义。

<img src="https://image.oldboard.tech/blog/42C85B51-059A-4B8B-9FB1-782D34219F6C.png"/>

### 创建代码片段

编辑好代码后，右键选择 Create Code Snippet...

<img src="https://image.oldboard.tech/blog/EB3A0E07-AF75-4B5A-85E8-30D1AE5AC14E.png"/>

### 编辑代码片段

<img src="https://image.oldboard.tech/blog/8C1AD5D1-0D22-4C92-812F-BE8A7751DA14.png"/>

### 使用代码片段

在xcode代码编辑窗口，键盘直接敲击上图中的Completion内容，即`ctitlebtn`，就会直接插入这段代码。

## 导入与导出

代码片段在本地的保存位置：

	~/Library/Developer/Xcode/UserData/CodeSnippets/

<img src="https://image.oldboard.tech/blog/WX20221009-112302.png"/>

将文件夹中的文件拷贝到其他设备的相应位置即可。

每次在该文件夹中手动添加/删除文件后，需要重启Xcode。
