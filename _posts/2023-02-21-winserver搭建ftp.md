---
title: WinServer搭建FTP
tags: Other
key: 2023-02-21-winserver搭建ftp
---
> 关键词：winserver, ftp, 阿里云, mac

### 安装FTP

打开服务器管理器：

<img src="https://image.oldboard.tech/blog/E1032C68-4C55-46EF-9C79-41089F8FA956.png"/>

添加功能：

<img src="https://image.oldboard.tech/blog/16723817-379F-4416-870C-36452A83A938.png"/>

跟着向导走：

<img src="https://image.oldboard.tech/blog/EC067A00-8996-4D22-A59E-A849C153EBF9.png"/>

<img src="https://image.oldboard.tech/blog/003D27A8-C5B8-464C-80DA-4C2095057522.png"/>

<img src="https://image.oldboard.tech/blog/0970C06B-6E67-4355-B246-90D52F5A22BE.png"/>

<img src="https://image.oldboard.tech/blog/0523B11B-7716-4F7C-A354-E39EA3B18044.png"/>

<img src="https://image.oldboard.tech/blog/BBFEC1ED-5E4B-451B-862D-1C3B317A6614.png"/>

<img src="https://image.oldboard.tech/blog/2C7FEB10-284A-42B7-B56E-199F21F447E3.png"/>

<img src="https://image.oldboard.tech/blog/52007D3E-354C-4200-A59F-EE1C099B48C8.png"/>

<img src="https://image.oldboard.tech/blog/6B60DF70-DC5D-45A1-9064-B0E11FEABB68.png"/>

<img src="https://image.oldboard.tech/blog/D0B58CA0-970A-4009-A245-EC231B207696.png"/>

安装完成了。

### 配置FTP

开始配置FTP：

<img src="https://image.oldboard.tech/blog/E43AE78F-D87D-4309-AB34-68C400502662.png"/>

<img src="https://image.oldboard.tech/blog/649D96CF-1CB6-40ED-B656-9C3F0F991905.png"/>

<img src="https://image.oldboard.tech/blog/A55F9073-7634-4C3E-82AA-77C4FA274FDF.png"/>

<img src="https://image.oldboard.tech/blog/2BD5497A-5A96-4F9E-9AC3-0AD16FA65C48.png"/>

<img src="https://image.oldboard.tech/blog/BD8D23EA-6B48-4B9D-ADFF-43A852CBBBF5.png"/>

<img src="https://image.oldboard.tech/blog/90DA3E1D-2644-4ABF-B01D-583CA32BF906.png"/>

FTP服务配置完成了。

### 配置FTP防火墙

开始配置FTP防火墙：

<img src="https://image.oldboard.tech/blog/3C2CE485-D2C6-45CF-9833-4A22C05872BF.png"/>

<img src="https://image.oldboard.tech/blog/786E4D8B-6421-4EBB-A97A-813DB4515C72.png"/>

到这里，服务器上的配置就完成了。

### 阿里云配置

如果使用的是阿里云服务器，还需要在阿里云控制台配置安全组，开放相应端口。

<img src="https://image.oldboard.tech/blog/C042E997-402C-43C3-8D7D-817511969A8C.png"/>

### Mac访问FTP

Mac系统访问FTP：

command+k 输入服务器外网IP进行连接

<img src="https://image.oldboard.tech/blog/1C2A2D31-F8A7-4B74-9D27-60C320AF6A7F.png"/>

Mac自带的这种方法，只能读取ftp的内容，不能写入。

如果需要写入，需要安装类似 File Zilla 之类的客户端软件。

