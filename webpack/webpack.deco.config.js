const path = require('path');
//const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
//var argv = require('minimist')(process.argv.slice(2));
//const isWeb = (argv && argv.target === 'web');
//const outputPath = (isWeb ? 'dist/web' : 'dist/electron');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require("copy-webpack-plugin");
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const options = {

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/decoupled.html',
      //inject: true
    }),

    /*
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'public'), to: path.resolve(__dirname, '..', outputPath) },
      ],
    }),

    new CleanWebpackPlugin(),*/
  ],

  devServer: {
    /*
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },*/
    watchFiles: ['src/decoupled.html'],
  }

};

/*
options.target = webpackTargetElectronRenderer(options);

if (!isWeb) {
  options.plugins.push(new CopyWebpackPlugin({
    patterns: [
      {from: path.resolve(__dirname, '..', 'src/package.json'), to: path.resolve(__dirname, '..', outputPath) },
      {from: path.resolve(__dirname, '..', 'src/main.js'), to: path.resolve(__dirname, '..', outputPath) },
      {from: path.resolve(__dirname, '..', 'src/preload.js'), to: path.resolve(__dirname, '..', outputPath) },
    ]
  }))
}

*/
module.exports = options;
