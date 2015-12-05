var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var filename = 'scripts/[name].bundle.js';
var cssFilename = 'styles/[name].css';
var imageFilename = 'images/[name].[ext]';

module.exports = {
    entry: "./src/scripts/main.jsx",
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
                test: /\.(png|jpg)$/,
                exclude: [/node_modules/],
                loader: 'file-loader?name=' + imageFilename
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename,
        publicPath: ''
    },
    plugins: [
        new ExtractTextPlugin(cssFilename),
        new HtmlWebpackPlugin({
            template: 'html!' + path.resolve(__dirname, 'src/index.html'),
            favicon: path.resolve(__dirname, 'src/images/favicon.ico')
        })
    ],
    resolve: {
        modulesDirectories: ['.', './node_modules']
    },
    devServer: {
        //contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/',
        progress: true,
        colors: true,
        inline: true
    }
};
