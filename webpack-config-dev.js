const { resolve } = require('path')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-common.js');

module.exports = merge(common, {
  entry: {
    app: [
      './src/app/entry.js'
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8100' }),
    // NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
    new webpack.NamedModulesPlugin(),
    // 启用 HMR
    new webpack.HotModuleReplacementPlugin(),
  ]
})


