---
title: Button - 按钮
---

# 按钮

### 预览
***
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>
<br/>

### 使用方法
```html
<g-button>默认按钮</g-button>
<g-button icon="setting">设置</g-button>
<g-button icon="setting" icon-position="right">图标在右</g-button>
<g-button loading="true">加载中</g-button>
<g-button disabled>不可使用</g-button>
```
<br/>

### 详细
***
### 单个按钮
#### 1.图标
通过设置`icon`属性在 Button 内嵌入一个 Icon。
<br/>
通过设置`iconPosition`属性改变 Icon 在 Button 中的位置，目前支持“左/右”两种。

#### 2.加载中
通过设置 `loading` 属性，让按钮的 Icon 变为加载中状态。

#### 3.不可用
通过设置`disabled`属性，将按钮变为不可用状态。

### 按钮群组
#### 预览
<br/>
<br/>
<button-group></button-group>

#### 代码
```html
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```