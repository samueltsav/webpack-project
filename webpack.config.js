const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let mode = "development";

if (process.env.NODE_ENV === "production") {
	mode = "production";
}

module.exports = {
	
	plugins: [new MiniCssExtractPlugin()],
	
	mode: mode,

	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},

	devtool: "source-map",

	devServer: {
		static: "./dist",
		hot: true,
	},
};