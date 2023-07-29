<template>
  <div class="dropdown">
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        <img src="@/assets/user.jpg" alt="" />
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人中心</el-dropdown-item>
        <el-dropdown-item command="c">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    handleCommand(command) {
      if (command === "c") {
        Cookie.remove("token");
        Cookie.remove("menu");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.dropdown {
  margin-right: 30px;
  padding: 0 8px;
  font-size: 18px;
  color: #5a5e66;
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
}
</style>