---
title: Tabs - 标签
---

# 标签

### 预览
***
<tab-demos></tab-demos>
<br/>

### 使用方法
***
```vue
<template>
  <div>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1"> Tab1</g-tabs-item>
        <g-tabs-item name="2"> Tabs2</g-tabs-item>
        <g-tabs-item name="3"> Tabs3</g-tabs-item>
        <g-tabs-item name="4" disabled> Tabs4</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1"> Tab1 的内容</g-tabs-pane>
        <g-tabs-pane name="2"> Tab2 的内容</g-tabs-pane>
        <g-tabs-pane name="3"> Tab3 的内容</g-tabs-pane>
        <g-tabs-pane name="4"> Tab4 的内容</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      selected: '1'
    };
  }
};
</script>
```

### 属性
***
* 默认选择 Tabs 需要通过`selected`属性设置默认值，通过`:selected="selected"`来绑定默认值。
<br/>
* 在 g-tabs-item 上可以设置`disabled`属性使该标签不可用。
<br/>
* g-tabs 的子组件应该为 g-tabs-head 和 g-tabs-body。