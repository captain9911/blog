---
title: 导出App Store上App的ipa包
tags: Mac iOS
key: 2021-04-13-导出appstore的ipa
---
> 关键词：Mac, iOS, ipa, Apple Configurator 2, 导出ipa

### 概述

使用Apple Configurator 2工具导出App Store上App的ipa包。

### 操作步骤

1. 在Mac的 App Store 下载安装 Apple Configurator 2。
2. Mac通过数据线连接iPhone。
3. 选中连接的设备。

<img src="https://image.oldboard.tech/blog/9113ABBF-7A18-4742-B03F-C9662F6F0466.png" width="600">

4. 添加需要导出的App。

<img src="https://image.oldboard.tech/blog/DB1A8B9E-9834-487C-90F3-ACD6B41026BF.png" width="600">

5. 选择需要下载的版本，搜索App名称。第一次使用时，会弹窗提示登录Apple ID。

<img src="https://image.oldboard.tech/blog/F5AEB6BF-1536-49BC-B15D-A5D61ED75D91.png" width="600">

6. 弹窗后不要做任何点击。（如果手机当前没有安装所搜索的App，会自动在手机上安装这个App，不会有这个弹窗。需要重复一次4、5步骤。）

<img src="https://image.oldboard.tech/blog/255BDB9C-7432-4F46-9AAF-FE3DE3DEF597.png" width="600">

7. 进入到这个目录，里面还有两层文件夹，点进去，把里面的.ipa文件拷贝出来，再点弹窗上的停止按钮。完成。（一定要拷贝出来，不然点击停止后，文件会被自动删除）。

```
~/Library/Group Containers/K36BKF7T3D.group.com.apple.configurator/Library/Caches/Assets/TemporaryItems/MobileApps/
```
