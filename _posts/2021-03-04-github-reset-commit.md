---
title: 删除已提交到GitHub上的某次commit
tags: GitHub Git
key: 2021-03-04-github-reset-commit
---

#### 示例
<img src="https://image.oldboard.tech/blog/WX20210304-105659.png">

#### 查询需要删除的记录

```
git log
```

<img src="https://image.oldboard.tech/blog/WX20210304-111628.png" width="600">

#### 将HEAD指向前一条记录

<img src="https://image.oldboard.tech/blog/WX20210304-111921.png" width="600">

```
git reset --hard 3bbd54798fc9760f038e9f91a8c40fb3bf792b51
```

#### 推送到远端

```
git push origin HEAD --force
```

#### 删除成功后
<img src="https://image.oldboard.tech/blog/WX20210304-112316.png">
