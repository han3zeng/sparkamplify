const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// if it is under dev mode
const devMode = process.env.NODE_ENV !== 'production'

// minify css in prodcution mode
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const root = path.join(__dirname, '../')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {root}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: 'true',
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  performance: {
    hints: false
  }
}

//performance need to be reconsidred
