<template>
  <div ref="echarts3" style="width: 100%; height: 250px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const echarts3 = echarts.init(this.$refs.echarts3);
      const eachrts3Option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: [
              {
                name: "小米",
                value: 2999,
              },
              {
                name: "苹果",
                value: 5999,
              },
              {
                name: "vivo",
                value: 1500,
              },
              {
                name: "oppo",
                value: 1999,
              },
              {
                name: "锤子",
                value: 2200,
              },
              {
                name: "三星",
                value: 4500,
              },
            ],
            type: "pie",
          },
        ],
      };
      echarts3.setOption(eachrts3Option);
    },
  },
};
</script>

<style>
</style>