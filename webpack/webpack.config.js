const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var argv = require('minimist')(process.argv.slice(2));
const isWeb = (argv && argv.target === 'web');
const outputPath = (isWeb ? 'dist/web' : 'dist/electron');
const templatePath = (isWeb ? 'src/html/index.ejs' : 'electron/index.html');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let options ={
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader'
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', outputPath),
    //publicPath: path.join(__dirname, '..', 'src'),
    filename: '[name]_bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: {
    main: path.resolve(__dirname, '..', './src/js/main.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: templatePath,
      inject: 'body'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'public'), to: path.resolve(__dirname, '..', outputPath) },
      ],
    }),
    new CleanWebpackPlugin(),
  ],

};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;
