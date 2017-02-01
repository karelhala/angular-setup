"use strict";
const webpack = require("webpack"),
      path = require("path"),
      HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    "vendor": "./src/vendor",
    "app": "./src/boot"
  },
  output: {
    path: __dirname + '/dist',
    filename: "js/[name].bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {enforce: 'pre', test: /\.ts?$/, loader: 'tslint-loader', exclude: /(node_modules|libs)/},
      {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {test:/\.html$/, loader:'html-loader' },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
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
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "js/vendor.bundle.js"})
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 7000
  }
};
