---
title: HTML_input_表单输入
tags: HTML
key: 2022-10-11-html_input
---
> 关键词：html, input, 表单输入

```
<!-- name：input元素的名称
value：默认的内容
size：显示的宽度
maxlength：允许输入的最多字符数 -->
```

### 文本输入 text

普通的文本输入框。

```
<input type="text" name="name" value="默认的内容" size="100" maxlength="10">
```

### 密码输入 password

密码输入框。

```
<input type="password" name="pwd">
```

### 单选按钮 radio

* 相同的name是一组，作为单选项。
* checked表示默认的选中状态

```
<!-- 相同的name是一组，作为单选项 -->
<input type="radio" name="radio666" value="xuanxiang0">选项0
<!-- checked表示默认的选中状态 -->
<input type="radio" name="radio666" value="xuanxiang1" checked="">选项1
```

### 复选框 checkbox

```
<input type="checkbox" name="box" value="fuxuan0">复选0
<input type="checkbox" name="box" value="fuxuan1" checked="">复选1
<input type="checkbox" name="box" value="fuxuan2">复选2
```

### 普通按钮 button

```
<input type="button" name="btn" value="按钮标题">
```

### 提交按钮 submit

submit按钮如果不设置value，则默认为“提交”。

```
<input type="submit" name="put">
```

### 图片按钮 image

```
<input type="image" src="./imgFiles/WX20171220-163206.png" width="50">
```

### 重置按钮 reset

* 重置这个表单上所有的输入。
* reset按钮如果不设置value，则默认为“重置”。

```
<input type="reset" name="res">
```

### 选择文件 file

```
<input type="file">
```
