const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const filename = 'scripts/[name].[chunkhash].js';
const cssFilename = 'styles/styles.[contenthash].css';
const imageFilename = 'images/[name].[hash].[ext]';

module.exports = {
  entry: {
    web: './src/scripts/index.jsx',
    static: './src/scripts/index_static.jsx',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: /\.(png|jpg|ico)$/,
        exclude: [/node_modules/],
        loader: 'file?name=' + imageFilename,
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract('css!autoprefixer?browsers=last 2 versions!sass'),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename,
    libraryTarget: 'umd',
  },
  plugins: [
    new ExtractTextPlugin(cssFilename),
    new StaticSiteGeneratorPlugin('static', ['/']),
  ],
  resolve: {
    modulesDirectories: ['.', './node_modules'],
  },
  devServer: {
    publicPath: '/',
    progress: true,
    colors: true,
  },
};
