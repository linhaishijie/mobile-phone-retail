<template>
  <div class="tags">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :closable="item.label !== '首页'"
      :effect="$route.meta.label === item.label ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item)"
      style="
        height: 26px;
        line-height: 26px;
        border-radius: 0px;
        padding: 0 8px;
      "
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ path: "/home", label: "首页" }],
    };
  },
  watch: {
    $route() {
      this.getTag();
    },
  },
  methods: {
    //添加tag
    getTag() {
      //避免重复添加
      const add = { path: this.$route.path, label: this.$route.meta.label };
      const index = this.items.findIndex((val) => val.label === add.label);
      if (index === -1) {
        this.items.push(add);
      }
    },
    //点击改变
    changeMenu(item) {
      this.$router.push(item.path);
    },
    //删除tag
    handleClose(item) {
      if (this.$route.path === item.path) {
        const result = this.items.findIndex((val) => val.label === item.label);
        this.items.splice(result, 1);
        const length = this.items.length - 1;
        this.$router.push(this.items[length].path);
      } else {
        const result = this.items.findIndex((val) => val.label === item.label);
        this.items.splice(result, 1);
      }
    },
  },
  //刷新防丢
  mounted() {
    if (this.$route.path !== "/home") {
      this.getTag();
    }
  },
};
</script>

<style lang="less" scoped>
.tags {
  padding: 3px 20px;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .el-tag + .el-tag {
    margin-left: 10px;
  }
}
</style>