<template>
  <div>
    <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
  </div>
</template>
<style scoped>
.wrapper{
  z-index: 30 !important;
}
</style>
<style>
* {
  box-sizing: border-box;
}
</style>

<script lang="ts">
import plugin from '../../../src/plugin'
import Button from '../../../src/button/button'
import Toast from '../../../src/toast'
import Vue from 'vue'
Vue.use(plugin)

export default {
  components:{
    'g-button': Button,
    'i-toast': Toast
  },
}
</script>

<style lang= "scss" scoped>

</style>