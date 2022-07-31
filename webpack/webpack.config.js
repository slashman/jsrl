const path = require('path');
const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var argv = require('minimist')(process.argv.slice(2));
const isWeb = (argv && argv.target === 'web');
const outputPath = (isWeb ? 'dist/web' : 'dist/electron');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let options = {
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
    filename: '[name]_bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  entry: {
    renderer: path.resolve(__dirname, '..', './src/renderer.js')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'public'), to: path.resolve(__dirname, '..', outputPath) },
      ],
    }),

    new CleanWebpackPlugin(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, '..', 'public'),
    },
    watchFiles: ['src/index.html'],
  }

};

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
