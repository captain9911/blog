---
title: Sourcetree 报错 SSL_ERROR_SYSCALL
tags: Other
key: 2021-03-05-sourcetree-ssl
---

### pull或push时报错

`LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443`

或者：

`LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 60`

### 解决方法

#### 如当前Shadowsocks处于打开状态
```
git config --global http.proxy socks5://127.0.0.1:1086
git config --global https.proxy socks5://127.0.0.1:1086
```

#### 如当前Shadowsocks处于关闭状态
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

```
networksetup -setv6off Wi-Fi
```

然后关闭WiFi，重新打开。