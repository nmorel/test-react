var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var filename = 'scripts/bundle.js';
var cssFilename = 'styles/[name].css';
var imageFilename = 'images/[name].[ext]';

module.exports = {
  entry: "./src/scripts/entry.jsx",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg|ico)$/,
        exclude: [/node_modules/],
        loader: 'file?name=' + imageFilename
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract('css!autoprefixer?browsers=last 2 versions!sass')
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: filename,
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin(cssFilename),
    new StaticSiteGeneratorPlugin(filename, ['/'])
  ],
  resolve: {
    modulesDirectories: ['.', './node_modules']
  },
  devServer: {
    publicPath: '/',
    progress: true,
    colors: true
  }
};
