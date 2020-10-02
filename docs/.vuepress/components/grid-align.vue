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