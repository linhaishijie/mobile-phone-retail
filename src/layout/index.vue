<template>
  <el-container class="contain">
    <el-aside width="auto" class="aside">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <TopBar></TopBar>
      </el-header>
      <AppTag></AppTag>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "@/layout/SideBar";
import TopBar from "@/layout/TopBar";
import AppTag from "@/components/AppTag.vue";
export default {
  components: {
    SideBar,
    TopBar,
    AppTag,
  },
};
</script>

<style lang="less" scoped>
.contain {
  height: 100%;
  .header {
    padding: 0;
    height: 51px;
  }
  .main {
    padding: 10px 20px;
  }
}
</style>