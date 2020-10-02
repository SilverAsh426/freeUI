<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">设置</g-button>
    <g-button icon="setting" icon-position="right">图标在右</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button disabled>不可使用</g-button>
  </div>
</template>

<script lang="ts">
import Button from '../../../src/button/button.vue'
export default {
  components:{
    'g-button': Button
  }
}
</script>
