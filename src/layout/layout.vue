<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'FreeLayout',
    data(){
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach((vm)=>{
        if(vm.$options.name === 'FreeSider'){
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang= "scss" scoped>
  .layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>