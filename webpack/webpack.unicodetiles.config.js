/**
 * This is the webpack configuration for the use of the UNICODETILES renderer.
 * It is currently the JSRL default
 */
const {resolve} = require('path')

const options = {

  entry: {
    renderer: resolve(__dirname, '..', './src/renderer.js')
  },

}

module.exports = options
