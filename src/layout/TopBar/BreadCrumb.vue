<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="item" :to="{ path: '/home' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item
        class="item"
        v-for="(item, index) in breaddata"
        :key="index"
      >
        {{ item.meta.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breaddata: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      this.breaddata = this.$route.matched.filter(
        (item) => item.meta.label != "首页"
      );
    },
  },
};
</script>

<style>
.item {
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>