---
title: 苹果M2安装CocoaPods
tags: Mac CocoaPods
key: 2023-07-23-苹果M2安装CocoaPods
---
> 关键词：m2, cocoapods, brew

## 按顺序执行下面3组命令

```
export HOMEBREW_NO_INSTALL_FROM_API=1
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

```
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

```
brew install cocoapods
```
