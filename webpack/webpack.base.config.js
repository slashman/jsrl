/**
 * This is the BASE webpack configuration that other configuration will inherit from
 * via the webpack-merge mechanism
 */
require('dotenv').config()
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const isWeb = (argv && argv.target === 'web');
const outputPath = (isWeb ? 'dist/web' : 'dist/electron');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let options = {
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader"
      },
      {
        test: /\.js?$/,
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
    extensions: ['', '.js', '.ts'],
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

  target: process.env.target || 'web',

  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },
    watchFiles: ['src/index.html'],
  }

};

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
