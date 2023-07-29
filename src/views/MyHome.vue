<template>
  <div class="home">
    <h3>本项目比较出色的点</h3>
    <h4>1.tags</h4>
    <ul>
      <li>显示当前页面路由相对应的tag</li>
      <li>删除当前页面路由相对应的tag，会自动跳转到最后一个tag对应的页面</li>
      <li>删除非当前页面路由相对应的tag，当前路由不发生变化</li>
    </ul>
    <h4>2.面包屑</h4>
    <ul>
      <li>将当前页面对应的nav菜单层级显示出来</li>
    </ul>
    <h4>3.nav菜单</h4>
    <ul>
      <li>点击折叠按钮，从而折叠nav菜单</li>
    </ul>
    <h4>4.不同用户，权限不同</h4>
    <ul>
      <li>
        管理员账户，菜单显示所有功能<br />
        用户名：<strong>admin</strong><br />
        密码：<strong>admin123</strong>
      </li>
      <li>
        用户账户，菜单显示部分功能<br />
        用户名：<strong>user</strong><br />
        密码：<strong>user123</strong>
      </li>
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
  ul {
    border-bottom: 1px solid #676a6c;
    padding-bottom: 10px;
  }
}
</style>