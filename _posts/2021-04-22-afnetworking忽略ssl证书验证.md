---
title: AFNetworking忽略SSL证书验证
tags: iOS
key: 2021-04-22-afnetworking忽略ssl证书验证
---
> 关键词：AFNetworking, SSL, https

### 概述

这个方法是通过直接修改AFNetworking源代码实现的。

### 操作步骤

打开源文件`AFSecurityPolicy.m`，注释掉这段代码：

```
- (BOOL)evaluateServerTrust:(SecTrustRef)serverTrust
                  forDomain:(NSString *)domain
{
//    if (domain && self.allowInvalidCertificates && self.validatesDomainName && (self.SSLPinningMode == AFSSLPinningModeNone || [self.pinnedCertificates count] == 0)) {
//        // https://developer.apple.com/library/mac/documentation/NetworkingInternet/Conceptual/NetworkingTopics/Articles/OverridingSSLChainValidationCorrectly.html
//        //  According to the docs, you should only trust your provided certs for evaluation.
//        //  Pinned certificates are added to the trust. Without pinned certificates,
//        //  there is nothing to evaluate against.
//        //
//        //  From Apple Docs:
//        //          "Do not implicitly trust self-signed certificates as anchors (kSecTrustOptionImplicitAnchors).
//        //           Instead, add your own (self-signed) CA certificate to the list of trusted anchors."
//        NSLog(@"In order to validate a domain name for self signed certificates, you MUST use pinning.");
//        return NO;
//    }
```

发起请求时：

```
AFSecurityPolicy *securityPolicy = [AFSecurityPolicy defaultPolicy];
securityPolicy.allowInvalidCertificates = YES;
AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
manager.securityPolicy = securityPolicy;
```

