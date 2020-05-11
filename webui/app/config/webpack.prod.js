const webpack = require('webpack'),      
      helper = require('./helper').root,
      fs = require('fs'),
      ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
      HappyPack = require('happypack')

      var nodeModules = fs.readdirSync('node_modules')
        .filter(x => ['.bin'].indexOf(x) === -1)
        .reduce((acc, cur) => Object.assign(acc, { [cur]: 'commonjs ' + cur }), {});
        nodeModules['jquery'] = 'jQuery'

module.exports = function() {
  return {
    devtool: false,
    entry: {
      main: helper('index.ts')
    },
    watch: false,
    target: "node",
    mode: "production",
    node: { __dirname: true, __filename: true },
    externals:nodeModules,
    plugins: [
      new HappyPack({
        id: 'ts',
        threads: 1,
        loaders: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'ts-loader',
              query: {
                happyPackMode: true,
                compilerOptions:{
                  sourceMap: false
                }
              }
            }
        ]
      }),      
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })
    ],
    resolve: {
      modules: [helper("src"), helper("node_modules")],
      extensions: ['.ts','.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['babel-loader',"happypack/loader?id=ts"],
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
