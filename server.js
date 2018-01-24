const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack-config-dev');
// const express = require('express');
var compiler = webpack(config);

config.entry.app.unshift(
  "webpack-dev-server/client?http://localhost:8100/", 
  'webpack/hot/dev-server',
  'react-hot-loader/patch',
); 


let server = new WebpackDevServer(compiler, {
  hot: true,
  disableHostCheck: true,
  historyApiFallback: true,
  contentBase: 'static',
  stats: { colors: true },
  // 代理服务
  proxy: {
    '/list': {
      target: 'http://api.manster.me/proxy',
      secure: false,
      pathRewrite: { '^/list': '' },
      changeOrigin: true,
    }
  }
}).listen('8100', 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('监听8100');
})