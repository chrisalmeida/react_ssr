var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
      app: "./web/static/js/app.js",
      main: "./web/static/js/main.js"
    },
    output: {
        path: __dirname + "/priv/static/js",
        filename: "[name].js",
        library: "main_react",
        libraryTarget: "commonjs2"
    },
    module : {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: "node_modules"
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('/css/app.css')
    ],
    devtool: 'source-map'
};

module.exports = config
