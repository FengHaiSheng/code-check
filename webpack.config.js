const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'dist',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 8084
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ]
};
