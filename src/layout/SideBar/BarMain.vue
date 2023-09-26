<template>
  <div class="aside">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
      active-text-color="rgb(64, 158, 255)"
      style="border: 0"
    >
      <el-menu-item>
        <router-link to="/home" class="barloge">
          <img :src="logo" class="loge" />
          <span class="title">{{ title }}</span>
        </router-link>
      </el-menu-item>
      <template v-for="item in menudata">
        <el-menu-item v-if="!item.children" :key="item.name" :index="item.path">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-else :key="item.name" index="item.name">
          <template slot="title">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.name"
            :index="child.path"
          >
            <i :class="`el-icon-${child.icon}`"></i>
            <span slot="title">{{ child.label }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import logoImg from "@/assets/logo.png";
export default {
  data() {
    return {
      logo: logoImg,
      title: "手机零售后台",
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.hamburger.isCollapse;
    },

    menudata() {
      return JSON.parse(Cookie.get("menu")) || this.$store.state.menu.menu;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
.barloge {
  width: auto;
  height: 50px;
  line-height: 50px;
  text-align: center;
  & .loge {
    width: 23px;
    height: 26px;
    vertical-align: middle;
  }
  & .title {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    vertical-align: middle;
    padding-left: 12px;
  }
}
</style>