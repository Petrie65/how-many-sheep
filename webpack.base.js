const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
	// WEBGL_RENDERER: true,
	// CANVAS_RENDERER: false
});

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: [/\.vert$/, /\.frag$/],
				use: 'raw-loader',
			},
			{
				test: /\.(gif|png|jpe?g|svg|xml)$/i,
				use: 'file-loader',
			},
		],
	},
	entry: {
		app: [path.resolve(__dirname, 'src/main.js')],
		vendor: ['phaser'],
	},
	plugins: [
		definePlugin,
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../'),
		}),
		new webpack.DefinePlugin({
			CANVAS_RENDERER: JSON.stringify(true),
			WEBGL_RENDERER: JSON.stringify(true),
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
};
