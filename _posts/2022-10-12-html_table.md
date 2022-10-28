---
title: HTML table 表格
tags: HTML
key: 2022-10-12-html_table
---
> 关键词：html, table


## 常用属性

* border：表格外边框宽度
* cellpadding：单元格边距
* cellspacing：单元格间距

## 示例

### 普通表格

一行一列

```
<table border="1">
	<tr>
		<td>只有一个元素</td>
	</tr>
</table>
```

<table border="1">
	<tr>
		<td>只有一个元素</td>
	</tr>
</table>

一行三列

```
<table border="1">
	<tr>
		<td>零零</td>
		<td>零一</td>
		<td>零二</td>
	</tr>
</table>
```

<table border="1">
	<tr>
		<td>零零</td>
		<td>零一</td>
		<td>零二</td>
	</tr>
</table>

两行三列

```
<table border="5">
	<tr>
		<td>零零</td>
		<td>零一</td>
		<td>零二</td>
	</tr>
	<tr>
		<td>一零</td>
		<td>一一</td>
		<td>一二</td>
	</tr>
</table>
```

<table border="5">
	<tr>
		<td>零零</td>
		<td>零一</td>
		<td>零二</td>
	</tr>
	<tr>
		<td>一零</td>
		<td>一一</td>
		<td>一二</td>
	</tr>
</table>

### 带表头的表格

```
<table border="5" cellpadding="10" cellspacing="1">
	<!-- 表格的标题必须紧随table标签 -->
	<caption>这是表格的标题</caption>
	<tr>
		<!-- 表头默认是粗体居中的文本 -->
		<!-- 表头：用th替换原来的td标签即可 -->
		<th>表头0</th>
		<th>表头1</th>
		<th>表头2</th>
	</tr>
	<tr>
		<td>元素00</td>
		<td>元素01</td>
		<td>元素02</td>
	</tr>
	<tr>
		<td>元素10</td>
		<td>元素11</td>
	</tr>
</table>
```

<table border="5" cellpadding="10" cellspacing="1">
	<!-- 表格的标题必须紧随table标签 -->
	<caption>这是表格的标题</caption>
	<tr>
		<!-- 表头默认是粗体居中的文本 -->
		<!-- 表头：用th替换原来的td标签即可 -->
		<th>表头0</th>
		<th>表头1</th>
		<th>表头2</th>
	</tr>
	<tr>
		<td>元素00</td>
		<td>元素01</td>
		<td>元素02</td>
	</tr>
	<tr>
		<td>元素10</td>
		<td>元素11</td>
	</tr>
</table>

### 垂直表头的表格

```
<table border="1">
	<tr>
		<th>表头0</th>
		<td>内容00</td>
		<td>内容01</td>
	</tr>
	<tr>
		<th>表头1</th>
		<td>内容10</td>
		<td>内容11</td>
	</tr>
</table>
```

<table border="1">
	<tr>
		<th>表头0</th>
		<td>内容00</td>
		<td>内容01</td>
	</tr>
	<tr>
		<th>表头1</th>
		<td>内容10</td>
		<td>内容11</td>
	</tr>
</table>

### 没有边框的表格

```
<table>
	<!-- 或者<table border="0"> -->
	<tr>
		<td>元素00</td>
		<td>元素01</td>
		<td>元素02</td>
	</tr>
	<tr>
		<td>元素10</td>
		<td>元素11</td>
		<td>元素12</td>
	</tr>
</table>
```

<table>
	<!-- 或者<table border="0"> -->
	<tr>
		<td>元素00</td>
		<td>元素01</td>
		<td>元素02</td>
	</tr>
	<tr>
		<td>元素10</td>
		<td>元素11</td>
		<td>元素12</td>
	</tr>
</table>

### 横向跨单元格的表格

```
<table border="1">
	<tr>
		<th>表头0</th>
		<!-- 横向跨度为2格 -->
		<th colspan="2">表头1</th>
	</tr>
	<tr>
		<td>内容0</td>
		<td>内容1</td>
		<td>内容2</td>
	</tr>
</table>
```

<table border="1">
	<tr>
		<th>表头0</th>
		<!-- 横向跨度为2格 -->
		<th colspan="2">表头1</th>
	</tr>
	<tr>
		<td>内容0</td>
		<td>内容1</td>
		<td>内容2</td>
	</tr>
</table>

### 纵向跨单元格的表格

```
<table border="1">
	<tr>
		<th>表头0</th>
		<td>内容0</td>
	</tr>
	<tr>
		<!-- 纵向跨度为2格 -->
		<th rowspan="2">表头1</th>
		<td>内容1</td>
	</tr>
	<tr>
		<td>内容2</td>
	</tr>
</table>
```

<table border="1">
	<tr>
		<th>表头0</th>
		<td>内容0</td>
	</tr>
	<tr>
		<!-- 纵向跨度为2格 -->
		<th rowspan="2">表头1</th>
		<td>内容1</td>
	</tr>
	<tr>
		<td>内容2</td>
	</tr>
</table>

### 单元格内内嵌元素

```
<table border="1">
	<tr>
		<td>
			<p>这是一个段落</p>
			<p>这是另一个段落</p>
		</td>
		<td>
			<!-- 这里不能用caption对单元格内的表格做标题，会被认为是最外层表格的标题 -->
			<!-- <caption>这个单元格内包含了一个列表</caption> -->
			这是一个在单元格内部的表格
			<table border="1">
				<tr>
					<td>yuansu00</td>
					<td>yuansu01</td>
				</tr>
				<tr>
					<td>yuansu10</td>
					<td>yuansu11</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<!-- 这是一个列表 -->
			<ul>
				<li>neirong0</li>
				<li>neirong1</li>
				<li>neirong2</li>
			</ul>
		</td>
		<td>
			这是另外一个单元格
		</td>
	</tr>
</table>
```

<table border="1">
	<tr>
		<td>
			<p>这是一个段落</p>
			<p>这是另一个段落</p>
		</td>
		<td>
			<!-- 这里不能用caption对单元格内的表格做标题，会被认为是最外层表格的标题 -->
			<!-- <caption>这个单元格内包含了一个列表</caption> -->
			这是一个在单元格内部的表格
			<table border="1">
				<tr>
					<td>yuansu00</td>
					<td>yuansu01</td>
				</tr>
				<tr>
					<td>yuansu10</td>
					<td>yuansu11</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<!-- 这是一个列表 -->
			<ul>
				<li>neirong0</li>
				<li>neirong1</li>
				<li>neirong2</li>
			</ul>
		</td>
		<td>
			这是另外一个单元格
		</td>
	</tr>
</table>

### 划分了结构的表格（页眉、页脚、主体）

```
<!-- 页眉、页脚、主体都可以有多行 -->
<table width="300" height="200" border="1">
	<!-- caption必须紧随table标签，并且每个表格只能定义一个 -->
	<caption>这个是表格标题</caption>
	<!-- thead与tbody、tfoot用来划分表格代码结构 -->
	<!-- 头部 -->
	<thead>
		<tr>
			<th>表头内容0</th>
			<th>表头内容1</th>
			<th>表头内容2</th>
		</tr>
	</thead>
	<!-- 主体 -->
	<tbody>
		<tr>
			<td>内容00</td>
			<td>内容01</td>
			<td>内容02</td>
		</tr>
		<tr>
			<td>内容10</td>
			<td>内容11</td>
			<td>内容12</td>
		</tr>
	</tbody>
	<!-- 页脚 -->
	<!-- 页脚存在兼容性问题，一般不使用 -->
	<tfoot>
		<tr>
			<td>页脚0</td>
			<td>页脚1</td>
			<td>页脚2</td>
		</tr>
	</tfoot>
</table>
```

<!-- 页眉、页脚、主体都可以有多行 -->
<table width="300" height="200" border="1">
	<!-- caption必须紧随table标签，并且每个表格只能定义一个 -->
	<caption>这个是表格标题</caption>
	<!-- thead与tbody、tfoot用来划分表格代码结构 -->
	<!-- 头部 -->
	<thead>
		<tr>
			<th>表头内容0</th>
			<th>表头内容1</th>
			<th>表头内容2</th>
		</tr>
	</thead>
	<!-- 主体 -->
	<tbody>
		<tr>
			<td>内容00</td>
			<td>内容01</td>
			<td>内容02</td>
		</tr>
		<tr>
			<td>内容10</td>
			<td>内容11</td>
			<td>内容12</td>
		</tr>
	</tbody>
	<!-- 页脚 -->
	<!-- 页脚存在兼容性问题，一般不使用 -->
	<tfoot>
		<tr>
			<td>页脚0</td>
			<td>页脚1</td>
			<td>页脚2</td>
		</tr>
	</tfoot>
</table>

## 应用

```
<table border="0" width="500">
	<tr>
		<!-- 横向跨度为2个单元格 -->
		<td colspan="2" style="background-color: #FFA500;">
			<h1>这是一个标题</h1>
		</td>
	</tr>
	<tr>
		<td style="background-color: red; width: 100px">
			<h4>这是小标题0</h4>
			<h4>这是小标题1</h4>
			<h4>这是小标题2</h4>
			<h4>这是小标题3</h4>
		</td>
		<td style="background-color: blue;">
			<p>这里是一个段落</p>
		</td>
	</tr>
	<tr>
		<td colspan="2" style="background-color: yellow; text-align: center;">
			这是一段文字
		</td>
	</tr>
</table>
```

<table border="0" width="500">
	<tr>
		<!-- 横向跨度为2个单元格 -->
		<td colspan="2" style="background-color: #FFA500;">
			<h1>这是一个标题</h1>
		</td>
	</tr>
	<tr>
		<td style="background-color: red; width: 100px">
			<h4>这是小标题0</h4>
			<h4>这是小标题1</h4>
			<h4>这是小标题2</h4>
			<h4>这是小标题3</h4>
		</td>
		<td style="background-color: blue;">
			<p>这里是一个段落</p>
		</td>
	</tr>
	<tr>
		<td colspan="2" style="background-color: yellow; text-align: center;">
			这是一段文字
		</td>
	</tr>
</table>

