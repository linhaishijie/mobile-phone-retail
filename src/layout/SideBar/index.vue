<template>
  <div class="sidebar">
    <BarMain></BarMain>
  </div>
</template>

<script>
import BarMain from "./BarMain";
export default {
  components: {
    BarMain,
  },
};
</script>

<style lang="less" scoped>
.sidebar {
  background-color: rgb(48, 65, 86);
  width: auto;
  height: 100%;
  overflow: hidden;
}
</style>