---
title: HTML_table_表格
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

### 页眉、页脚、主体

```
<!-- 页眉、页脚、主体都可以有多行 -->
<table border="1">
	<!-- 页眉 -->
	<thead>
		<tr>
			<td>yemei00</td>
			<td>yemei01</td>
			<td>yemei02</td>
		</tr>
		<tr>
			<td>yemei10</td>
			<td>yemei11</td>
			<td>yemei12</td>
		</tr>
	</thead>
	<!-- 页脚 -->
	<tfoot>
		<tr>
			<td>yejiao00</td>
			<td>yejiao01</td>
			<td>yejiao02</td>
		</tr>
		<tr>
			<td>yejiao10</td>
			<td>yejiao11</td>
			<td>yejiao12</td>
		</tr>
	</tfoot>
	<!-- 主体 -->
	<tbody>
		<tr>
			<td>zhuti00</td>
			<td>zhuti01</td>
			<td>zhuti02</td>
		</tr>
		<tr>
			<td>zhuti10</td>
			<td>zhuti11</td>
			<td>zhuti12</td>
		</tr>
	</tbody>
	<tr>
		<td>qwer</td>
		<td>asdf</td>
		<td>zxcv</td>
	</tr>
</table>
```

<!-- 页眉、页脚、主体都可以有多行 -->
<table border="1">
	<!-- 页眉 -->
	<thead>
		<tr>
			<td>yemei00</td>
			<td>yemei01</td>
			<td>yemei02</td>
		</tr>
		<tr>
			<td>yemei10</td>
			<td>yemei11</td>
			<td>yemei12</td>
		</tr>
	</thead>
	<!-- 页脚 -->
	<tfoot>
		<tr>
			<td>yejiao00</td>
			<td>yejiao01</td>
			<td>yejiao02</td>
		</tr>
		<tr>
			<td>yejiao10</td>
			<td>yejiao11</td>
			<td>yejiao12</td>
		</tr>
	</tfoot>
	<!-- 主体 -->
	<tbody>
		<tr>
			<td>zhuti00</td>
			<td>zhuti01</td>
			<td>zhuti02</td>
		</tr>
		<tr>
			<td>zhuti10</td>
			<td>zhuti11</td>
			<td>zhuti12</td>
		</tr>
	</tbody>
	<tr>
		<td>qwer</td>
		<td>asdf</td>
		<td>zxcv</td>
	</tr>
</table>

