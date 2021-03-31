---
title: .gitignore忽略文件无效的解决方法
tags: Git
key: 2021-03-30-gitignore无效
---
> 关键词：gitignore, git, 忽略文件无效

### .gitignore文件修改后不生效？

.gitignore只能忽略未被跟踪的文件。如文件已被跟踪，再修改.gitignore，是不会生效的。

### 解决方法

```
#删除本地缓存
git rm -r --cached .
#将改动添加到暂存区
git add .
#提交
git commit -m "your commit"
```

