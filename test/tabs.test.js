const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="os">
        <g-tabs-head>
          <g-tabs-item name="ds">数据结构</g-tabs-item>
          <g-tabs-item name="os">操作系统</g-tabs-item>
          <g-tabs-item name="net">计算机网络</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="ds">数据结构相关资料</g-tabs-pane>
          <g-tabs-pane name="os">操作系统相关资料</g-tabs-pane>
          <g-tabs-pane name="net">计算机网络相关资料</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name="os"]')
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接受 direction prop', () => {

  })
})
