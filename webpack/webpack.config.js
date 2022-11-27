
require('dotenv').config()
const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.config.js')
const defaultConfig = require('./webpack.default.config.js')
const pixiConfig = require('./webpack.pixi.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, args) => {

  const mode = args.mode
  const target = process.env.target || 'web'
  const gfx = process.env.graphics || 'default'
  let config

  if (gfx !== 'default') {
    config = merge(commonConfig, pixiConfig)
  } else {
    config = merge(commonConfig, defaultConfig)
  }

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      title: `JSRL | ${gfx} | ${target}`,
      graphics: gfx
    })
  )


  return config
}
