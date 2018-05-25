const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    openPage: 'build/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      publicPath: "/build/",
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    publicPath: "/build/",
  },
});

// devServer.contentBase
// Note that using contentBase when you're using html-webpack-plugin has no effect.
// https://github.com/webpack/webpack-dev-server/issues/362
