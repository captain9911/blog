---
title: SDWebImage的常用方法
tags: iOS
key: 2022-10-31-SDWebImage
---
> 关键词：SDWebImage

### 同时缓存多张图片

	#import <SDWebImage/SDWebImagePrefetcher.h>
	
	[[SDWebImagePrefetcher sharedImagePrefetcher] prefetchURLs:urlArray];

### 使用缓存图片

	#import <SDWebImage/UIImageView+WebCache.h>

	[_wMapImageView sd_setImageWithURL:data.imageUrl placeholderImage:kPlaceholderImage];

### 单独异步下载图片

不会缓存

	SDWebImageDownloader *downloader = [SDWebImageDownloader sharedDownloader];
	[downloader downloadImageWithURL:imageURL options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize, NSURL * _Nullable targetURL) {
	    // progression tracking code
	    
	} completed:^(UIImage * _Nullable image, NSData * _Nullable data, NSError * _Nullable error, BOOL finished) {
	    if (image && finished) {
	        // do something with image
	    }
	}];
	
### 单独异步缓存图片	

	//缓存到内存和磁盘
	[[SDImageCache sharedImageCache] storeImage:myImage forKey:myCacheKey];
	//只缓存到内存
	[[SDImageCache sharedImageCache] storeImage:myImage forKey:myCacheKey toDisk:NO];

### 自定义缓存key

有时候url中的一部分是动态变化的，只需要把不变的部分作为key

	SDWebImageManager.sharedManager.cacheKeyFilter = ^(NSURL *url) {
	 url = [[NSURL alloc] initWithScheme:url.scheme host:url.host path:url.path];
	 return [url absoluteString];
	};