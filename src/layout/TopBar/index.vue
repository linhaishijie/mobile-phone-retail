<template>
  <div class="topbar">
    <div class="top">
      <span class="el-icon-menu hamburger" @click="change"></span>
      <BreadCrumb class="left"></BreadCrumb>
      <DropDown class="right"></DropDown>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "./BreadCrumb";
import DropDown from "./DropDown";
export default {
  methods: {
    change() {
      this.$store.commit("CollapseMenu");
    },
  },
  components: {
    BreadCrumb,
    DropDown,
  },
};
</script>

<style lang="less" scoped>
.top {
  overflow: auto;
  background: #fff;
  .hamburger {
    line-height: 50px;
    height: 100%;
    float: left;
    padding: 0px 15px;
    cursor: pointer;
    font-size: 22px;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(15, 14, 14, 0.08);
    }
  }

  .left {
    float: left;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
  .right {
    float: right;
    height: 50px;
  }
}
</style>