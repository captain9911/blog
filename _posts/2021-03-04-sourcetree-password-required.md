---
title: Sourcetree提交代码时提示Password Required
tags: Tools Mac Sourcetree
key: 2021-03-04-sourcetree-password-required
---
#### 问题
每次提交代码都会弹窗，要求输入密码。

<img src="https://image.oldboard.tech/blog/WX20210304-113116.png">

#### 解决方法
终端进入仓库根目录下，执行：

```
git config credential.helper store
```
