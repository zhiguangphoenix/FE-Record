const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: "./src/index.js",
		// another: './src/another-module.js'
	},
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
  ],
  output: {
  	filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  	path: path.resolve(__dirname, 'dist')
  }
}