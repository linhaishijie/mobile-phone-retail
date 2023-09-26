<template>
  <div class="home">
    <h3>手机零售后台</h3>
    <p>本项目为一款针对手机售卖进行管理的后台。在系统架构整体上，是参考了若依后台管理系统所实现，主要包括手机管理、客户管理、数据图表展示、系统工具等多个功能模块。</p>
    <h4>技术实现</h4>
    <ul>
      <li>1、基于若依框架+Vue进行项目搭建开发，并引入ECharts、Element-ui等第三方插件进行项目开发；进行项目配置文件配置，例如alias 文件别名、页面路由动态注册等；设置mock模拟后台接口进行数据交互等；
      </li>
      <li>2、在数据图表展示模块中，通过引入 ECharts 折线图实现了像每日销量数据的可视化展示；引入 ECharts 饼状图实现了像不同手机品牌销量的分布占比图等；</li>
      <li>3、根据项目需求按需引用/二次封装Element-ui组件，实现功能需求开发，例如封装了条件搜索业务组件，菜单栏组件、面包屑组件、表格渲染组件等组件，简化了开发步骤；</li>
      <li>4、项目中自行封装工具类函数和方法，提高开发效率。例如基于JS的Date对象所封装的时间戳转换、日期格式化等日期处理方法；基于JS闭包思想封装防抖节流函数，避免按钮短时间内重复多出触发的问题等；</li>
      <li>5、合理利用Vuex和缓存进行全局数据状态存储和调用，避免多层组件props传递问题。并且将像token、用户信息等不经常变化的数据，存储在本地缓存中，在下次请求时从缓存中读取数据，而不用重新进行获取；</li>
      <li>6、由于Vue2的数据劫持存在只能对现有对象属性的监听，没法对新添加的属性进行监听，所以使用$set动态添加响应式数据，并通过封装深拷贝函数对数据复制，防止影响源数据；</li>
      <li>7、使用 Prettier 配合 Eslint 统一前端代码格式化，对项目代码进行整理；其次合理利用 JS 设计模式进行代码优雅化，例如像一些嵌套多层的 if/else、 switch/cash 等代码块，采用 JS
        设计模式-策略模式思想，以对象形式建立 key-value 映射关系进行抽离重写；</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home {
  h3 {
    margin-top: 10px;
    font-size: 26px;
    line-height: 1.1;
  }

  h4 {
    margin: 10px 0;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    text-indent: 2em;
    line-height: 1.35;
  }

  li {
    padding-bottom: 10px;
    text-indent: 2em;
    line-height: 1.35;
    list-style: none;
  }
}</style>