/**
 * Webpack confirguration that is only for 'development' mode.
 */
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config')

module.exports = merge.smart(baseConfig, {
	mode: 'development',
})
