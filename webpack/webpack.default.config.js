const {resolve} = require('path')

const options = {

  entry: {
    renderer: resolve(__dirname, '..', './src/renderer.js')
  },

}

module.exports = options
