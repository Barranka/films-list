// vue.config.js
module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
   		? './'
		: '/',
	assetsDir: 'assets',
	productionSourceMap: false,
	outputDir: 'docs',
	// filenameHashing: false
  }