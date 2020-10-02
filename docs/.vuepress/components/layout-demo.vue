<template>
  <div>
    <g-layout class="layout">
      <g-header class="header"> header</g-header>
      <g-content class="content"> content</g-content>
      <g-footer class="footer"> footer</g-footer>
    </g-layout>
    <br>
    <g-layout class="layout">
      <g-sider style="background:rgb(152,195,240); width: 100px;"> sider</g-sider>
      <g-layout>
        <g-header class="header"> header</g-header>
        <g-content class="content"> content</g-content>
        <g-footer class="footer"> footer</g-footer>
      </g-layout>
    </g-layout>
    <br>
    <g-layout class="layout">
      <g-header class="header">header</g-header>
      <g-layout>
        <g-sider style="height: 200px; background:rgb(152,195,240); width:100px; ">sider</g-sider>
        <g-content class="content">content</g-content>
      </g-layout>
      <g-footer class="footer">footer</g-footer>
    </g-layout>
  </div>
</template>

<script lang="ts">
import Layout from '../../../src/layout/layout.vue';
import Header from '../../../src/layout/header.vue';
import Content from '../../../src/layout/content.vue';
import Sider from '../../../src/layout/sider.vue';
import Footer from '../../../src/layout/footer.vue';

export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-sider': Sider,
    'g-footer': Footer
  }
};
</script>

<style lang="scss" scoped>
$bg-color: rgb(107, 169, 234);
.layout {
  color: whitesmoke;
  overflow: hidden;
}
.header {
  height: 50px;
  background: $bg-color;
}
.content {
  height: 200px;
  background: lighten($bg-color, 20%);
}
.footer {
  height: 50px;
  background: $bg-color;
}
</style>