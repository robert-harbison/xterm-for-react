/**
 * Webpack confirguration that is only for 'production' mode.
 */
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config')

module.exports = merge.smart(baseConfig, {
	mode: 'production',
})
