<template>
  <div id="main" style="height: 250px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: { text: "每日销量图" },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["06-24", "06-25", "06-26", "06-27", "06-28", "06-29", "06-30"],
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          interval: 3,
          max: 18,
        },
        series: [
          {
            data: [0, 2, 3, 8, 8, 15, 13],
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              color: "#ffd35e",
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>