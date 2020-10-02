---
title: Grid - 栅格
---

# 栅格
<br/>
24 栅格系统。
<br/>
<br/>

### 预览
***
<grid-demo></grid-demo>
<br/>

### 使用方法
```vue
<template>
  <div>
    <g-row class="demoRow">
      <g-col class="demoCol" span="24">col-24</g-col>
    </g-row>
    <g-row>
      <g-col class="demoCol" span="12">col-12</g-col>
      <g-col class="demoCol" span="12">col-12</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col class="demoCol" span="8">col-8</g-col>
      <g-col class="demoCol" span="8">col-8</g-col>
      <g-col class="demoCol" span="8">col-8</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col class="demoCol" span="6">col-6</g-col>
      <g-col class="demoCol" span="6">col-6</g-col>
      <g-col class="demoCol" span="6">col-6</g-col>
      <g-col class="demoCol" span="6">col-6</g-col>
    </g-row>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  color: #eeeeee;
  font-size: 15px;
}

.demoRow {
  margin: 10px 0;
}

.demoCol {
  height: 30px;
  border: 1px solid #CCD6E1;
  background: #6BA9EA;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
<br/>

### 属性
***
### Row 属性
#### 1.gutter
给 Row 设置`gutter`属性，可以让栅格有间隔，单位为`px`。
<br/>
##### 预览
<br/>
<grid-gutter></grid-gutter>

##### 代码
```vue
<template>
  <div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8"><div class="demoCol">col-8, gutter-10</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-10</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-10</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="20">
      <g-col span="8"><div class="demoCol">col-8, gutter-20</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-20</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-20</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="30">
      <g-col span="8"><div class="demoCol">col-8, gutter-30</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-30</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-30</div></g-col>
    </g-row>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  color: #eeeeee;
  font-size: 15px;
}

.demoRow {
  margin: 10px 0;
}

.demoCol {
  height: 30px;
  border: 1px solid #CCD6E1;
  background: #6BA9EA;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

#### 2.align
给 Row 设置`align`属性，可以定义子组件的排列方式。
<br/>
##### 预览
<br/>
<grid-align></grid-align>

##### 代码
```vue
<template>
  <div>
    <g-row class="demoRow" align="left">
      <g-col class="demoCol" span="8">left</g-col>
      <g-col class="demoCol" span="8">left</g-col>
    </g-row>
    <g-row class="demoRow" align="center">
      <g-col class="demoCol" span="8">center</g-col>
      <g-col class="demoCol" span="8">center</g-col>
    </g-row>
    <g-row class="demoRow" align="right">
      <g-col class="demoCol" span="8">right</g-col>
      <g-col class="demoCol" span="8">right</g-col>
    </g-row>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  color: #eeeeee;
  font-size: 15px;
}

.demoRow {
  margin: 10px 0;
}

.demoCol {
  height: 30px;
  border: 1px solid #CCD6E1;
  background: #6BA9EA;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
* {
  box-sizing: border-box;
  color: #eeeeee;
  font-size: 15px;
}

.demoRow {
  margin: 10px 0;
}

.demoCol {
  height: 30px;
  border: 1px solid #CCD6E1;
  background: #6BA9EA;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

### Col属性
>Col 的选项有 span, offset 以及响应式

#### 1.span
栅格系统中列的宽度由`span`的值来决定，通过`<g-col span="12">宽度为12的列</g-col>`来创建一个列，整行的总宽为24。

#### 2.offset
设置`offset`的值可以使某一列向右偏移相应列数的宽度。
<br/>

##### 预览
<grid-offset></grid-offset>
##### 代码
```vue
<template>
  <div>
    <g-row class="demoRow">
      <g-col class="demoCol" span="8">col-8</g-col>
      <g-col class="demoCol" span="6" offset="2">col-6</g-col>
      <g-col class="demoCol" span="8">col-8</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col class="demoCol" span="8">col-8</g-col>
      <g-col class="demoCol" span="4" offset="4">col-4</g-col>
      <g-col class="demoCol" span="4" offset="4">col-4</g-col>
    </g-row>
    <g-row class="demoRow">
      <g-col class="demoCol" span="5" offset="3">col-5</g-col>
      <g-col class="demoCol" span="6" offset="2">col-6</g-col>
      <g-col class="demoCol" span="2" offset="6">col-2</g-col>
    </g-row>
  </div>
</template>
```

#### 3.响应式
有 pad, narrowPC, PC, widePC 四种宽度支持
<br/>
##### 代码
```vue
<script>
export default {
  props: {
    pad: {type: Object, validator,},
    narrowPc: {type: Object, validator,},
    pc: {type: Object, validator,},
    widePc: {type: Object, validator,}
  },
  computed: {
    colClass () {
      let {span, offset, pad, narrowPc, pc, widePc} = this
      let createClasses = this.createClasses
      return [
        ...createClasses({span, offset}),
        ...createClasses(pad, 'pad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: col-pad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px){ 
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
```