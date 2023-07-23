---
title: Xcode14报错x86_64-apple-ios-simulator
tags: Xcode
key: 2023-07-24-Xcode报错not_find_x86_64
---
> 关键词：Xcode14, arm64, simulator

## 报错信息

```
Could not find module 'xxx' for target 'x86_64-apple-ios-simulator'; found: arm64-apple-ios-simulator, at: /Users/username/Library/Developer/Xcode/DerivedData/...
```

## 解决方法

在`Podfile`中，`end`前增加这一段，在模拟器环境下，不编译arm64。

```
post_install do |installer|
  installer.pods_project.build_configurations.each do |config|
    config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
  end
end
```
