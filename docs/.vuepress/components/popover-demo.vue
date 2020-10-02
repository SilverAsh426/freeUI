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

<script lang="ts">
import Button from '../../../src/button/button.vue'
import Popover from '../../../src/popover'
export default {
  components:{
    'g-button': Button,
    'g-popover': Popover
  }
}
</script>