<template>
  <div class="home">
    <div>
      <el-row>
        <el-col :span="12">
          <el-card class="card" shadow="hover">
            <ChartOne></ChartOne>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="card" style="margin-left: 10px" shadow="hover">
            <ChartTwo></ChartTwo>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-card style="margin-bottom: 10px" shadow="hover">
      <MainTable></MainTable>
    </el-card>
  </div>
</template>

<script>
import MainTable from "@/components/MainTable.vue";
import ChartOne from "@/components/echarts/ChartOne.vue";
import ChartTwo from "@/components/echarts/ChartTwo.vue";
export default {
  components: {
    MainTable,
    ChartOne,
    ChartTwo,
  },
};
</script>

<style lang="less" scoped>
.card {
  display: inline-block;
  width: 100%;
}
</style>