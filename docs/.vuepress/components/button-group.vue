<template>
  <g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
  </g-button-group>
</template>

<script lang="ts">
import Button from '../../../src/button/button.vue'
import ButtonGroup from '../../../src/button/button-group.vue'
export default {
  components:{
    'g-button': Button,
    'g-button-group': ButtonGroup
  }
}
</script>