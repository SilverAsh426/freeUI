# 一个Vue UI组件

[![Build Status](https://travis-ci.org/SilverAsh426/freeUI.svg?branch=master)](https://travis-ci.org/SilverAsh426/freeUI)

## 介绍
使用 Vue 制作的一个简单 UI 框架

## 开始使用

1、 CSS样式设置
  请在 CSS 中开启 border-box，再使用本框架
  ```
 *,*::before,*::after{box-sizing: border-box;}
  ```  
  IE 8 及以上支持此样式    
  你还需要设置默认颜色等变量   

  ```
  html {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-redius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
      }
  ```
  IE 15 及以上支持此样式
    
2、安装 UI
  ```
  npm i --save free
  ```

3、引入 UI
  ```
  import {Button, ButtonGroup, Icon} from 'freeUI'
      import 'freeUI/dist/index.css'
      
      export default{
          name: 'app',
          components: {
              HelloWorld,
              'g-button': Button,
              'g-icon': Icon
          }
      }
  ``` 
    
4、引入 svg symbols

    <script src="//at.alicdn.com/t/font_2071641_h0g9v6vjtsj.js"></script>

## 文档

## 变更记录

## 联系方式

