var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './main.js',
  output: {
		path: path.join(__dirname, "assets"),
		publicPath: "assets/",
		filename: "main.js",
	},
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

};
