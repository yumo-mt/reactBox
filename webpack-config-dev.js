const { resolve } = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-common.js');

module.exports = merge(common, {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/app/entry.js'
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    // 启用 HMR
    hot: true,
    port: 8100,
    host: "0.0.0.0",
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: 'static',
    // 代理服务
    proxy: {
      '/list':{
        target:'http://api.manster.me/proxy',
        secure: false,
        pathRewrite: {'^/list' : ''},
        changeOrigin:true,
      }
    }
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8100' }),
    // NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    new webpack.NamedModulesPlugin(),
    // 启用 HMR
    new webpack.HotModuleReplacementPlugin(),
  ]
})


