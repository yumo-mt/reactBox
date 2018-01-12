const {resolve} = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-common.js');

module.exports = merge(common,{
    entry:{
        app: './src/app/entry.js',
    },
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name]-[id].[chunkhash:8].js',
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
        })
    ],
})