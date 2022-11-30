/**
 * This is the BASE webpack configuration that other configuration will inherit from
 * via the webpack-merge mechanism
 */
require('dotenv').config()
const path = require('path');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const argv = require('minimist')(process.argv.slice(2));
const isWeb = (argv && argv.target === 'web');
const outputPath = (isWeb ? 'dist/web' : 'dist/electron');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let options = {
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, '..', outputPath),
    filename: '[name]_bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  entry: {
    renderer: path.resolve(__dirname, '..', './src/renderer.js')
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'public'), to: path.resolve(__dirname, '..', outputPath) },
      ],
    }),

    new CleanWebpackPlugin(),
  ],

  mode: process.env.mode || 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },
    watchFiles: ['src/index.html'],
  }

};

// TODO: this should be considered deprecated - it's ancient and breaks with webpack-cli ^5.x
//   - TARGET should be `web` by default
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

module.exports = options;
