	var path = require('path')
	var webpack = require('webpack')
	var HtmlWebpackPlugin = require('html-webpack-plugin')
	module.exports = {
	    devtool: 'source-map',
	    /*webpack-hot-middleware/client,这是热加载需要的，生产要去掉*/
	    entry: [
	        'webpack-hot-middleware/client',
	        './src/index'
	    ],
	    output: {
	        path: path.join(__dirname, 'dist'),
	        filename: 'bundle.js',
	        publicPath: '/static/' /*开发环境下会将文件生成到内存中*/
	    },
	    plugins: [
	        /*热替换插件*/
	        new webpack.HotModuleReplacementPlugin(),
	        /*压缩组件*/
	        /*   new webpack.optimize.UglifyJsPlugin({
	               compress: {
	                   warnings: false,
	               },
	               output: {
	                   comments: false,
	               },
	           }),*/
	        /*自动生成一个html文件*/
	        new HtmlWebpackPlugin({
	            title: 'this is a webpack app demo',
	            hash: true
	        })
	    ],
	    module: {
	        /*js结尾的文件都用babel-loader来解析，排除node_modules,注意添加.babelrc*/
	        loaders: [{
	            test: /\.js$/,
	            loaders: ['babel'],
	            exclude: /node_modules/,
	            include: __dirname
	        }]
	    }
	}
