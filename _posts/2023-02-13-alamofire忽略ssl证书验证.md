---
title: Alamofire忽略SSL证书验证
tags: iOS
key: 2023-02-13-alamofire忽略ssl证书验证
---
> 关键词：Alamofire, SSL, https

### 概述

这个方法是通过直接修改Alamofire源代码实现的。

### 操作步骤

打开源文件`Session.swift`，修改这段代码：

```
public init(session: URLSession,
            delegate: SessionDelegate,
            rootQueue: DispatchQueue,
            startRequestsImmediately: Bool = true,
            requestQueue: DispatchQueue? = nil,
            serializationQueue: DispatchQueue? = nil,
            interceptor: RequestInterceptor? = nil,
            serverTrustManager: ServerTrustManager? = nil,
            redirectHandler: RedirectHandler? = nil,
            cachedResponseHandler: CachedResponseHandler? = nil,
            eventMonitors: [EventMonitor] = []) {
    precondition(session.configuration.identifier == nil,
                 "Alamofire does not support background URLSessionConfigurations.")
    precondition(session.delegateQueue.underlyingQueue === rootQueue,
                 "Session(session:) initializer must be passed the DispatchQueue used as the delegateQueue's underlyingQueue as rootQueue.")

    self.session = session
    self.delegate = delegate
    self.rootQueue = rootQueue
    self.startRequestsImmediately = startRequestsImmediately
    self.requestQueue = requestQueue ?? DispatchQueue(label: "\(rootQueue.label).requestQueue", target: rootQueue)
    self.serializationQueue = serializationQueue ?? DispatchQueue(label: "\(rootQueue.label).serializationQueue", target: rootQueue)
    self.interceptor = interceptor
    
    // ==========修改这里==============
    // self.serverTrustManager = serverTrustManager
    // 这里针对域名跳过了证书验证
    self.serverTrustManager = ServerTrustManager(allHostsMustBeEvaluated: false,
                                                 evaluators: ["api-dev. example.com": DisabledTrustEvaluator()])
    // 也可以这样写
    // self.serverTrustManager = ServerTrustManager(evaluators: ["api-dev.example.com": DisabledTrustEvaluator()])
    // ===============================
    
    self.redirectHandler = redirectHandler
    self.cachedResponseHandler = cachedResponseHandler
    eventMonitor = CompositeEventMonitor(monitors: defaultEventMonitors + eventMonitors)
    delegate.eventMonitor = eventMonitor
    delegate.stateProvider = self
}
```


