var path = require('path');
var webpack = require('webpack');

console.log(__dirname);

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  debug: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool : 'source-map',
};
