---
title: Xcode14报错Signing for "xxx" requires a development team. 
tags: Xcode CocoaPods
key: 2023-02-08-xcode报错signing
---
> 关键词：Xcode, CocoaPods, Signing & Capabilities

## 错误信息

组件化项目编译报错：

	Signing for "xxxxxx" requires a development team. Select a development team in the Signing & Capabilities editor.

## 解决方法

Podfile中增加这一段：

```
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
            config.build_settings['EXPANDED_CODE_SIGN_IDENTITY'] = ""
            config.build_settings['CODE_SIGNING_REQUIRED'] = "NO"
            config.build_settings['CODE_SIGNING_ALLOWED'] = "NO"
        end
    end
end
```

