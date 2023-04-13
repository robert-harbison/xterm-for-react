/**
 * Webpack confirguration applicable to both deb and prod.
 */
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// Build and export the config
module.exports = {
	// Entry options
	entry: {
		bundle: './src/index.ts',
	},

	// Output file options
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		globalObject: 'this',
		library: {
			name: 'xtermForReact',
			type: 'umd',
		},
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'], // Resolve these modules extensions when looking for modules.
	},

	devtool: 'source-map', // Generate source map

	module: {
		rules: [
			// TS / TSX files
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader'],
			},

			// CSS / Styles
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},

			// Images
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							disable: true,
						},
					},
				],
			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				test: /\.js$/,
				enforce: 'pre',
				use: 'source-map-loader',
			},
		],
	},

	plugins: [new ForkTsCheckerWebpackPlugin()],
}
