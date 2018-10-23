const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('../webpack.common.conf');

module.exports = merge(common, {
  devtool: 'source-map',     // 使用 source map，追踪错误和警告位置  // prod 使用source-map
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }) // dev可以不需要
  ],
});