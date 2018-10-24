const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { srcRoot, rootNode } = require('./configs/helpers/path');
const outputPath = path.resolve(__dirname, './dist');
const clientPath = './src/client'
function resolve(dir) {
  return dir ? `${path.resolve(__dirname)}/src/${dir}` : `${path.resolve(__dirname)}`;
}

module.exports = {
  // 入口文件
  entry: 
    // `${srcRoot('index.js')}`,
    { // 多文件
      test: `${clientPath}/test/index.ts`,
    },
  output: {
    filename: '[name].bundle.js',           // 输出文件
    path: outputPath,          // 输出文件的路径
    // 给url-loader用的资源文件前缀路径,表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换。
    // 具体表现为：被设置为url-loader的outputPath前的路径  -->  ..path/dist/img
    publicPath: 'dist/'
  },
  resolve: {
    extensions: ['.json', '.web.js', '.ts', 'tsx', '.js', '.jsx', 'less', 'scss', 'css'],
    alias: {
      common: resolve('common'),
      app: resolve('common/app'),
      containers: resolve('common/containers'),
      components: resolve('common/components'),
      routes: resolve('common/routes'),
      pages: resolve('common/pages'),
      stores: resolve('common/stores'),
    }
  },
  module: {
    rules: [
      { test: /\.(tsx|ts)?$/,
        use: [
          // 'ts-loader',
          // 'babel-loader',
          'awesome-typescript-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // 加载样式文件 style-loader  css-loader  sass-loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2',
          'sass-loader?outputStyle=expanded'
        ]
      },
      // 加载图片 file-loader url-loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'img/',    // 在output中的publicPath路径中的路径
              limit: 8192     // 小于8129字节的被转为baes64引入，大于8129字节的正常打包在指定的路径下
            }
          }
        ]
      },
      // 加载字体文件 file-loader url-loader
      { test: /\.(woff|woff2)(\?v=\d\.\d\.\d)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d\.\d\.\d)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d\.\d\.\d)?$/, loader: 'file-loader' },
      // 加载资源文件，csv/tsv/xml (json默认支持)
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    // 打包构建前先清理输出文件夹
    new CleanWebpackPlugin(['dist'], { root: rootNode('') }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      inject: true,
      chunks: ['vendor', 'main'],
    }),
  ],
};