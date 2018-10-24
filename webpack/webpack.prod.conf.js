const webpack = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const merge = require('webpack-merge');
const common = require('../webpack.common.conf');

module.exports = merge(common, {
  devtool: 'source-map',     // 使用 source map，追踪错误和警告位置  // prod 使用source-map
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new ParallelUglifyPlugin({   // 多核打包, dev可以不需要
      cacheDir: 'node_modules/.cache/uglifyjs_cache',
      sourceMap: true,
      uglifyJS: {
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }
    })
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});