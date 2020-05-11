const webpack = require('webpack'),            
      helper = require('./helper').root,
      fs = require('fs'),
      ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
      HappyPack = require('happypack'),
      WebpackShellPlugin = require('webpack-shell-plugin-next')

      var nodeModules = fs.readdirSync('node_modules')
      .filter(x => ['.bin'].indexOf(x) === -1)
      .reduce((acc, cur) => Object.assign(acc, { [cur]: 'commonjs ' + cur }), {});
      nodeModules['jquery'] = 'jQuery'

module.exports = function() {
  return {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      main: helper('index.ts')
    },
    watch: false,
    mode:"development",
    target: "node",
    node: { __dirname: true, __filename: true },
    externals:nodeModules,
    plugins: [
      new HappyPack({
        id: 'ts',
        threads: 1,
        loaders: [
          {
            path: 'babel-loader'
          },
          {
            path: 'ts-loader',
            query: { happyPackMode: true }
          }
        ]
      }),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
      new WebpackShellPlugin({
        onBuildEnd:{
          scripts: ['nodemon --inspect .build/main.js --watch .build/*'],
          blocking: false,
          parallel: true
        }
      })
    ],
    resolve: {
      modules: [helper("src"), helper("node_modules")],
      extensions: ['.ts','.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["happypack/loader?id=ts"],
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          polyfill: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2
          }
        }
      }
    },
    output: {
      path: helper('.build'),
      publicPath: '/',
      filename: "[name].js",
      libraryTarget: 'commonjs2'
    }
  }
}
