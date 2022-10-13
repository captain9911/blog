---
title: HTML_datalist_选项列表
tags: HTML
key: 2022-10-12-html_datalist
---
> 关键词：html, datalist

### 概述

* 这是一个html5才有的新标签
* 可下拉选择，可手动输入，输入过程中会自动提示
* datalist必须与input搭配使用，类似下拉列表，但是可以手动输入
* 通过input的list属性与datalist的id关联

### 示例

```
这里定义了一个选项列表：<input type="text" name="colors" list="yigeid">
<datalist id="yigeid">
	<option value="内容你"></option>
	<option value="内容我"></option>
	<option value="内容他"></option>
	<option value="内容你们"></option>
	<option value="内容你们呀"></option>
	<option value="内容我们"></option>
</datalist>
```

