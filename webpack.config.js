// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		open: true,
		host: "0.0.0.0",
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),

		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				loader: "babel-loader",
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, "css-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|gif)$/i,
				type: "asset",
			},
			{
				test: /\.(png|jpg)$/,
				loader: "url-loader",
				options: {
					limit: 8192,
					name: "static/media/[name].[ext]",
				},
			},
			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
