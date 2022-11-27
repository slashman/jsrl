/**
 * This is the webpack configuration for the use of the DEFAULT renderer - aka. UnicodeTiles
 */
const {resolve} = require('path')

const options = {

  entry: {
    renderer: resolve(__dirname, '..', './src/renderer.js')
  },

}

module.exports = options
