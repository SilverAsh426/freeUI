<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script lang="ts">
  import './svg'
  export default {
    name:'FreeIcon',
    props:['name']
  }
</script>

<style lang= "scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>