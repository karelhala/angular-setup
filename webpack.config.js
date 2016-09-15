var webpack = require("webpack");
module.exports = {
  entry: {
    "vendor": "./src/vendor",
    "app": "./src/boot"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
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
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js")
  ]
};
