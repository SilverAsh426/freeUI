<template>
  <div>
    <g-input value="请输入"></g-input>
    <g-input value="不可用" disabled></g-input>
    <g-input value="只读" readonly></g-input>
    <g-input value="好" error="不能少于两个字"></g-input>
  </div>
</template>

<script lang="ts">
import Input from '../../../src/input'
export default {
  components:{
    'g-input': Input,
  }
}
</script>
