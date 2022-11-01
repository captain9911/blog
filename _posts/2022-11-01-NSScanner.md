---
title: NSScanner字符串扫描
tags: iOS
key: 2022-11-01-NSScanner
---
> 关键词：NSScanner, Scanner, 字符串扫描

NSScanner是一个类，用于在字符串中扫描指定的字符，尤其是把它们翻译/转换为数字和别的字符串。可以在创建NSScaner时指定它的string属性，然后scanner会按照你的要求从头到尾地扫描这个字符串的每个字符。

扫描操作从上次扫描的位置开始，并且继续往后扫描直到指定的内容出现为止（如果有的话）。

## OC版

```
NSString *bananas = @"123.321abc137d efg hij kl";
NSString *separatorString = @"fg";
BOOL result;
NSScanner *aScanner = [NSScanner scannerWithString:bananas];

//扫描字符串
//扫描到指定字符串时停止，返回结果为指定字符串之前的字符串
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);
NSString *container;
result = [aScanner scanUpToString:separatorString intoString:&container];
NSLog(@"扫描成功：%@", result?@"YES":@"NO");
NSLog(@"扫描的返回结果：%@", container);
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);

//扫描整数
//将会接着上一次扫描结束的位置继续扫描
NSLog(@"-------------------------------------1");
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);
NSInteger anInteger;
result = [aScanner scanInteger:&anInteger];
NSLog(@"扫描成功：%@", result?@"YES":@"NO");
NSLog(@"扫描的返回结果：%ld", anInteger);
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);

//扫描整数
//将扫描仪的位置置为首位置
//扫描仪默认会接着上一次扫描结束的位置开始扫描，而不是重新从首位置开始
//当扫描到一个不是整数的字符时将会停止扫描（如果开始扫描的位置不为整数，则会直接停止扫描）
NSLog(@"-------------------------------------2");
aScanner.scanLocation = 0;      //将扫描仪的位置置为首位置
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);
NSInteger anInteger2;
result = [aScanner scanInteger:&anInteger2];
NSLog(@"扫描成功：%@", result?@"YES":@"NO");
NSLog(@"扫描的返回结果：%ld", anInteger2);
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);

//扫描浮点数
//当扫描到一个不是整数的字符时将会停止扫描（如果开始扫描的位置不为整数，则会直接停止扫描）
NSLog(@"-------------------------------------3");
aScanner.scanLocation = 0;      //将扫描仪的位置置为首位置
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);
float aFloat;
result = [aScanner scanFloat:&aFloat];
NSLog(@"扫描成功：%@", result?@"YES":@"NO");
NSLog(@"扫描的返回结果：%f", aFloat);
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);

NSLog(@"-------------------------------------4");
NSLog(@"所扫描的字符串：%@", aScanner.string);
NSLog(@"扫描仪所在的位置：%lu", aScanner.scanLocation);
NSLog(@"是否扫描到末尾：%@", aScanner.isAtEnd?@"YES":@"NO");
```

## Swift版

```
let content: String = "<p></p><div class=media-wrap image-wrap><img src=https://image.abc.com/test/638186586113_20220916155855.png/></div><p></p><p style=text-align:left; size=5 _root=[object Object] __ownerid=undefined __hash=undefined __altered=false><strong><span style=color:#61a951>成长值如何获取？</span></strong><br/>"

let targetPre = "<img"
let targetSuf = "/>"

let scan: Scanner = Scanner(string: content)
// 大小写敏感，默认为false
scan.caseSensitive = true

let startIndex: String.Index = content.startIndex
let endIndex: String.Index = content.endIndex
print("开始位置：\(startIndex)")
print("结束位置：\(endIndex)")

let preStr: String? = scan.scanUpToString(targetPre)
if let pre = preStr {
    print("扫描到的内容一：\(pre)")
}

var currentIndex: String.Index = scan.currentIndex
print("当前位置：\(currentIndex)")

let sufStr: String? = scan.scanUpToString(targetSuf)
if let suf = sufStr {
    print("扫描到的内容二：\(suf)")
}

currentIndex = scan.currentIndex
print("当前位置：\(currentIndex)")

if scan.isAtEnd == true {
    print("已扫描完")
}
```