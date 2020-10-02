---
title: Collapse - 折叠框
---

# 折叠框

### 预览
***
<collapse-demo></collapse-demo>

<br/>

### 使用方法
***
```vue
<template>
  <div>
    <g-collapse :selected.sync="selected">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return{
      selected :['1']
    }
  }
}
</script>
```

### 预览（手风琴效果）
***
<collapse-single></collapse-single>

<br/>

### 使用方法
***
```vue
<template>
  <div>
    <g-collapse :selected.sync="selected" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return{
      selected :['1']
    }
  }
}
</script>
```

### 属性
***
* Collapse 必须要输入两个参数，一个是表示折叠面板的标题`title`，一个是表示该 item 的序号`name`。
* 手风琴效果为当前只能显示一个面板，其余的自动收回，可通过添加`single`属性来设置。
* Collapse 还支持双向绑定，可使用`.sync`修饰符。
