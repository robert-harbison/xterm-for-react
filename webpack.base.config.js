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
		library: 'LIB',
		libraryTarget: 'var',
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
				use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
			},

			// CSS / Styles
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader'],
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
				loader: 'source-map-loader',
			},
		],
	},

	plugins: [new ForkTsCheckerWebpackPlugin()],
}
