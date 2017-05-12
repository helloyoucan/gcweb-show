var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
	baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
	},
	// cheap-module-eval-source-map is faster for development
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: 'homePage.html',
			template: 'homePage.html',
			inject: true,
			chunks: ['homePage'] //需要引入的Chunk，不配置就会引入所有页面的资源
		}),
		new HtmlWebpackPlugin({
			filename: 'article.html',
			template: 'article.html',
			inject: true,
			chunks: ['article'] //需要引入的Chunk，不配置就会引入所有页面的资源
		}),
		new HtmlWebpackPlugin({
			filename: 'course.html',
			template: 'course.html',
			inject: true,
			chunks: ['course'] //需要引入的Chunk，不配置就会引入所有页面的资源
		}),
		new HtmlWebpackPlugin({
			filename: 'articlesList.html',
			template: 'articlesList.html',
			inject: true,
			chunks: ['articlesList'] //需要引入的Chunk，不配置就会引入所有页面的资源
		}),
		new FriendlyErrorsPlugin()
	]
})