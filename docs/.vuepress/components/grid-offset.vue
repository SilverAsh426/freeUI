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

<script lang="ts">
import Row from '../../../src/grid/row.vue';
import Col from '../../../src/grid/col.vue';

export default {
  components: {
    'g-row': Row,
    'g-col': Col
  }
};
</script>

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