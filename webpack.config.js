// webpack.config.js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')

// 載入 dotenv-webpack
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
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
		new HTMLPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
		new VueLoaderPlugin(),
		new Dotenv({
			path: path.resolve(__dirname, '.env'),
			safe: true
		}),
	],
	resolve: { 
		alias: { 
			'vue': 'vue/dist/vue.js' 
		} 
	},
	devServer: {
		open: true,
		hot: true,
		static: {
			directory: path.join(__dirname, './')
		}
	}
}