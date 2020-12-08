"use strict"

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 8080 // dev port

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  // 服务器反代
  devServer: {
    hot:true,
    port: port,
    host: "0.0.0.0",
    useLocalIp: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "^/api": {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  },
  chainWebpack(config) {
    config.resolve.symlinks(true) // 热更新
  },
  configureWebpack: {
    // plugins: [
    //   // 配置compression-webpack-plugin压缩
    //   new CompressionWebpackPlugin({
    //     algorithm: 'gzip',
    //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //     threshold: 10240,
    //     minRatio: 0.8
    //   })
    // ]
  },
  productionSourceMap: false
}

