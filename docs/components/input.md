---
title: Input - 输入框
---

# 输入框

### 预览
***
<input-demo></input-demo>

### 使用方法
```html
<g-input value="请输入"></g-input>
<g-input value="不可用" disabled></g-input>
<g-input value="只读" readonly></g-input>
<g-input value="好" error="不能少于两个字"></g-input>
```
<br/>

### 可选属性
***
>Input 组件的可选属性有： disabled, readonly, error, 以及双向绑定。

#### 1.disabled
是否禁用输入框，默认为 false ，禁用且不可选中。

#### 2.readonly
只读状态，与 disabled 相似，但是 readonly 可选中输入框，不能修改。

#### 3.error
错误提示，在 input 后添加错误提示信息，具体内容刻在 error 中编辑

#### 双向绑定
##### 预览
<br/>

<input-model></input-model>

##### 代码
```vue
<template>
  <div>
    <g-input v-model="message"></g-input>
    <div>
      value: {{message}}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return{
      message: 'Hello World!'
    }
  }
}
</script>
```