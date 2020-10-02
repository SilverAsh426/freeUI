<template>
  <div>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1"> Tab1</g-tabs-item>
        <g-tabs-item name="2"> Tabs2</g-tabs-item>
        <g-tabs-item name="3"> Tabs3</g-tabs-item>
        <g-tabs-item name="4" disabled> Tabs4</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1"> Tab1 的内容</g-tabs-pane>
        <g-tabs-pane name="2"> Tab2 的内容</g-tabs-pane>
        <g-tabs-pane name="3"> Tab3 的内容</g-tabs-pane>
        <g-tabs-pane name="4"> Tab4 的内容</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../../../src/tabs/tabs.vue';
import TabsBody from '../../../src/tabs/tabs-body.vue';
import TabsHead from '../../../src/tabs/tabs-head.vue';
import TabsItem from '../../../src/tabs/tabs-item.vue';
import TabsPane from '../../../src/tabs/tabs-pane.vue';

export default {
  components: {
    'g-tabs': Tabs,
    'g-tabs-body': TabsBody,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane
  },
  data() {
    return {
      selected: '1'
    };
  }
};
</script>