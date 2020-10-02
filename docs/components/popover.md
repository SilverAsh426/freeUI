---
title: Popover - 弹出层
---

# 弹出层

### 预览（点击触发）
***
<popover-demo></popover-demo>

### 使用方法
```vue
<template>
  <div>
    <g-popover>
      <g-button>上方弹框</g-button>
      <template slot="content">内容1</template>
    </g-popover>
    <g-popover position="bottom">
      <g-button>下方弹框</g-button>
      <template slot="content">内容2</template>
    </g-popover>
    <g-popover position="left">
      <g-button>左边弹框</g-button>
      <template slot="content">内容3</template>
    </g-popover>
    <g-popover position="right">
      <g-button>右边弹框</g-button>
      <template slot="content">内容4</template>
    </g-popover>
  </div>
</template>
```

### 预览（hover触发）
***
<popover-hover></popover-hover>

### 使用方法
```vue
<template>
  <div>
    <g-popover trigger="hover">
      <g-button>上方弹框</g-button>
      <template slot="content">内容1</template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹框</g-button>
      <template slot="content">内容2</template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹框</g-button>
      <template slot="content">内容3</template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹框</g-button>
      <template slot="content">内容4</template>
    </g-popover>
  </div>
</template>
```

### 属性
>Popover 支持两种设置：position 用于设置弹框位置， trigger 用于设置弹出方式

##### 1.position
默认值为 `top`，可选择`bottom`，`left`，`right`。

##### 2.trigger
默认点击触发，可更改为`hover`。