"use strict";
const webpack = require("webpack"),
      HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "vendor": "./src/vendor",
    "app": "./src/boot"
  },
  output: {
    path: __dirname + '/dist',
    filename: "js/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {test: /\.ts$/, loader: 'tslint', exclude: /(node_modules|libs)/}
    ],
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      },
      {test:/\.html$/, loader:'html' },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Angular 2 test app',
      template: 'src/template-index.ejs', // Load a custom template
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"js/vendor.bundle.js")
  ]
};
