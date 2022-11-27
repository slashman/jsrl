/**
 * This is the webpack configuration for the use of the PIXI renderer
 */
const {resolve} = require('path')

const options = {

  entry: {
    renderer: resolve(__dirname, '..', './src/renderer.pixi.js')
  },
}

module.exports = options
