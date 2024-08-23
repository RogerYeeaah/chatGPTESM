// webpack.config.js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')

// 載入 dotenv-webpack
const Dotenv = require('dotenv-webpack');

module.exports = {
	target: 'web',
	entry: './src/js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HTMLPlugin(),
		new Dotenv({
		  path: path.resolve(__dirname, '.env')
		}),
	],
	resolve: { 
		alias: { 
			'vue': 'vue/dist/vue.js' 
		} 
	}
}