<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'FreeButtonGroup',
    mounted() {
      for (let node of this.$el.children){
        let name = node.nodeName.toLowerCase()
        if (name != 'button'){
          console.warn(`g-button-group 的子元素应该是 g-button， 但是现在包含 ${name}`)
        }
      }
    }
  }
</script>

<style lang= "scss" scoped>
  .g-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .g-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child{
        border-top-left-radius: var(--border-redius);
        border-bottom-left-radius: var(--border-redius);
      }
      &:last-child{
        border-top-right-radius: var(--border-redius);
        border-bottom-right-radius: var(--border-redius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>