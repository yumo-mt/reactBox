const path = require('path');
var webpack = require('webpack');
const { resolve } = path;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    vendor: ["jquery", "react", "react-dom", "react-router"],
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      /*
         匹配各种格式的图片和字体文件
         上面html-loader会把html中<img>标签的图片解析出来, 文件名匹配到这里的test的正则表达式,
         css-loader引用的图片和字体同样会匹配到这里的test条件
         */
      /*
          使用url-loader, 它接受一个limit参数, 单位为字节(byte)
          当文件体积小于limit时, url-loader把文件转为Data URI的格式内联到引用的地方
          当文件大于limit时, url-loader会调用file-loader, 把文件储存到输出目录, 并把引用的文件路径改写成输出后的路径
          比如 views/foo/index.html中
          <img src="smallpic.png">
          会被编译成
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA...">
          而
          <img src="largepic.png">
          会被编译成
          <img src="/f78661bef717cf2cc2c2e5158f196384.png">
        */
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      // 如果配置此项 需要在HTML模板中的title标签中增加   <%= htmlWebpackPlugin.options.title %>
      title: 'ReactBox',
      template: './src/www/index.html',
      filename: 'index.html'
    }),
  ]
};
