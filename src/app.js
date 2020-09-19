import Vue from 'vue'
import Button from './button'
import Icon from  './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el:"#app",
  data:{
    loading1:false,
    loading2:true,
    loading3:false
  }
})

//单元测试
import chai from 'chai'
import spices from 'chai-spies'
chai.use(spices)
const expect = chai.expect

//含有icon
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
//loading值
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
//icon在左边
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'setting'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()

}
//icon在右边
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'setting',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
//点击事件
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'setting'
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})
  vm.$on('click', spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}