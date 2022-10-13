---
title: HTML_select_下拉列表
tags: HTML
key: 2022-10-12-html_select
---
> 关键词：html, select, 下拉列表

可以设置一个默认值，否则默认值会是第一个选项。

### 普通的下拉列表

```
<form action="">
	这里是一个下拉列表：<select name="color">
		<option value="yellow">Yellow</option>
		<option value="red">Red</option>
		<!-- 可以设置一个默认值，否则默认值会是第一个选项 -->
		<!-- <option value="blue" selected="">Blue</option> -->
		<!-- 或者不写selected属性的值也是可以的 -->
		<option value="blue" selected>Blue</option>
		<option value="orange">Orange</option>
	</select>
</form>
```

<form action="">
	这里是一个下拉列表：<select name="color">
		<option value="yellow">Yellow</option>
		<option value="red">Red</option>
		<!-- 可以设置一个默认值，否则默认值会是第一个选项 -->
		<!-- <option value="blue" selected="">Blue</option> -->
		<!-- 或者不写selected属性的值也是可以的 -->
		<option value="blue" selected>Blue</option>
		<option value="orange">Orange</option>
	</select>
</form>

### 分组的下拉列表

```
<form action="">
	这是一个带分组的下拉列表：
	<select name="group0">
		<optgroup label="fenzu0">
			<option value="test00">test00</option>
			<option value="test01">test01</option>
			<option value="test02">test02</option>
		</optgroup>
		<optgroup label="goup1">
			<option value="test10">test10</option>
			<option value="test11">test11</option>
			<option value="test12">test12</option>
		</optgroup>
	</select>
</form>
```

<form action="">
	这是一个带分组的下拉列表：
	<select name="group0">
		<optgroup label="fenzu0">
			<option value="test00">test00</option>
			<option value="test01">test01</option>
			<option value="test02">test02</option>
		</optgroup>
		<optgroup label="goup1">
			<option value="test10">test10</option>
			<option value="test11">test11</option>
			<option value="test12">test12</option>
		</optgroup>
	</select>
</form>

