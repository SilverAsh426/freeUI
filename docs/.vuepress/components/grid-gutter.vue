<template>
  <div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8"><div class="demoCol">col-8, gutter-10</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-10</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-10</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="20">
      <g-col span="8"><div class="demoCol">col-8, gutter-20</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-20</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-20</div></g-col>
    </g-row>
    <g-row class="demoRow" gutter="30">
      <g-col span="8"><div class="demoCol">col-8, gutter-30</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-30</div></g-col>
      <g-col span="8"><div class="demoCol">col-8, gutter-30</div></g-col>
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