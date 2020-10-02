---
title: Layout - 布局
---

# 布局

### 预览
***
<layout-demo></layout-demo>

### 使用方法
***
```vue
<template>
  <div>
    <g-layout>
      <g-header> header </g-header>
      <g-content> content </g-content>
      <g-footer> footer </g-footer>
    </g-layout>
    <br>
    <g-layout>
      <g-sider> sider </g-sider>
      <g-layout>
        <g-header> header </g-header>
        <g-content> content </g-content>
        <g-footer> footer </g-footer>
        </g-layout>
      </g-layout>
    <br>
    <g-layout>
      <g-header> header </g-header>
      <g-layout >
        <g-sider> sider </g-sider>
        <g-content> content </g-content>
      </g-layout>
      <g-footer> footer </g-footer>
    </g-layout>
  </div>
</template>
```

### 选项
***
基础布局，样式自定义
<br/>

### 概述
* `g-layout`：布局容器，其下可嵌套 Layout Header Sider Content Footer。

* `g-header`: 顶部元素，只能放在 Layout 中，其下可嵌套任何元素。

* `g-sider`: 侧边栏，只能放在 Layout 中，其下可嵌套任何元素, Sider 带有 close 按钮，点击可关闭侧边栏。

* `g-content`: 内容部分，只能放在 Layout 中，其下可嵌套任何元素。

* `g-footer`: 底部元素，只能放在 Layout 中，其下可嵌套任何元素。
