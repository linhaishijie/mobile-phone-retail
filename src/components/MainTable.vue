<template>
  <el-table :data="tableData" style="width: 100%; color: black">
    <el-table-column
      v-for="(key, val) in propData"
      :key="key"
      :prop="val"
      :label="key"
    >
    </el-table-column>
  </el-table>
</template>

<script>
import { getData } from "@/api";
export default {
  data() {
    return {
      propData: {
        name: "手机品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      tableData: [],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data;
      this.tableData = tableData;
    });
  },
};
</script>

<style>
</style>