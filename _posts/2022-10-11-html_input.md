---
title: HTML input 表单输入
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

### HTML5新增的类型

```
<!-- 当输入的内容与指定类型不一致时，会弹出提示 -->

<!-- 提交时会提示错误 -->
邮箱：<input type="email">
<br>

<!-- 这个没有提示 -->
电话：<input type="tel">
<br>

<!-- 点击提交时会提示错误 -->
URL：<input type="url">
<br>

<!-- 只能输入数字，有小三角进行增减减少操作 -->
数字：<input type="number">
<br>

<!-- 圆角输入框 -->
搜索：<input type="search">
<br>

<!-- 显示一个滑块 -->
范围：<input type="range">
<br>

<!-- x午xx:xx，可上下调整 -->
上下午时分：<input type="time">
<br>

<!-- 可上下调整，可弹出日历 -->
年月日：<input type="date">
<br>

<!-- 这个没有提示 -->
时间：<input type="datetime">
<br>

<!-- xxxx年xx月，可上下调整，可弹出日历 -->
年月：<input type="month">
<br>

<!-- xxxx年第xx周，可上下调整，可弹出日历 -->
年周：<input type="week">
<br>

<!-- 弹出颜色选择器 -->
颜色：<input type="color">
<br>

提交：<input type="submit">
```