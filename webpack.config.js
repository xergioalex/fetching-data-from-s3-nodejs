const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  // Webpack configuration
  let config = {
    entry: {
      index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: '[name].js',
      publicPath: 'lambda/dist/',
      library: 'main',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: true,
      __dirname: true
    },
    devtool : 'source-map',
    externals: [nodeExternals()],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.webpack.js', '.web.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: [require('babel-plugin-transform-flow-strip-types')],
            presets: [
              [
                'env',
                {
                  target: { node: 8.10 }, // Node version on AWS Lambda
                  useBuiltIns: false,
                  loose: false,
                  exclude: [],
                  debug: false
                },
              ],
            ],
          },
        }
      ]
    },
    plugins: [
      // Adds the source-map-support plugin for mapping the error messages back to the source file
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install();',
        raw: true,
        entryOnly: false
      })
    ],

  };


  if (argv && argv.mode === 'production') {
    config.plugins.push(
      new CleanWebPackPlugin(['dist'], {root:__dirname})
    )
  }

  return config
}