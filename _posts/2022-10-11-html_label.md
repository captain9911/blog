---
title: HTML labele 标注
tags: HTML
key: 2022-10-11-html_label
---
> 关键词：html, label, 标注, input

### 定义

<label> 标签为 input 元素定义标注（标记）。

### 使用

input标签应当被包含在label里。

```
<!-- input标签应当被包含在label里 -->
<label>这是一个标签：<input type="text"></label>

<!-- 默认会选中第一个，当需要选中其他表单时，需要设置label的for属性，指定选中控件 -->
<h2>多个input</h2>
<label for="zhegeid">这是一个标签：
    <input type="text">
    <input type="text" id="zhegeid">
</label>
```
