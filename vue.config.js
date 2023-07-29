const { defineConfig } = require('@vue/cli-service')
//安装path模块
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {},
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@u", resolve("src/utils"));
  },
})

