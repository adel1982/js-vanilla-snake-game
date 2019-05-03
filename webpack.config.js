const path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			exclude: /node_modules/,
	// 			use: {
	// 				loader: 'babel-loader',
	// 				options: {
	// 					presets: ["env"]
	// 				}
	// 			} 
	// 		}
	// 	]
	// }
}