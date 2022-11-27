
require('dotenv').config()
const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.config.js')
const defaultConfig = require('./webpack.default.config.js')
const gfxConfig = require('./webpack.gfx.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, args) => {

  const mode = args.mode
  const target = process.env.target || 'web'
  const gfx = process.env.gfx || 'default'
  let config

  if (gfx !== 'default') {
    config = merge(commonConfig, gfxConfig)
  } else {
    config = merge(commonConfig, defaultConfig)
  }

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      title: `JSRL | ${gfx} | ${target}`,
      gfx: gfx
    })
  )


  return config
}
