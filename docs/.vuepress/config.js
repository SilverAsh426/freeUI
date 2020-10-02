module.exports = {
  title: 'Free UI',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/install/'},
      {text: 'Github', link: 'https://github.com/SilverAsh426'},
    ],
    sidebar: [
      {
        title:'安装',
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/collapse',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          //'/components/toast'
        ]
      },
    ],
    lastUpdated: 'Last Updated', // string | boolean
  }
}