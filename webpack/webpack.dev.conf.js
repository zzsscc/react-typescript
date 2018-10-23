const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.common.conf');

module.exports = merge(common, {
  devtool: 'inline-source-map',     // 使用 source map，追踪错误和警告位置  // prod 使用source-map
  devServer: {
    // contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),   // 以便更容易查看要修补(patch)的依赖  // prod不需要
    new webpack.HotModuleReplacementPlugin(),    // prod不需要
  ],
});