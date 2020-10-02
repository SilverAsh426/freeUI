---
title: 快速上手
---

# 快速上手

## CSS 样式设置
请在 CSS 中开启 border-box，再使用本框架
```css
*,*::before,*::after{box-sizing: border-box;}
```
## 引入资源
```js
import {Button} from 'freeUI'
import 'freeUI/dist/index.css'
```

## 注册组件
```js
export default{
  name: 'app',
    components: {
      'g-button': Button
    }
}
```
## 使用
代码：
```html
<template>
  <div>
    <g-button>按钮</g-button>
  </div>
</template>
```
效果：
<br/>

<demo></demo>

