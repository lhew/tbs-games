// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { parsed } = require('dotenv').config();
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

console.log(parsed);

module.exports = (env, argv) => {
  const mode = (argv && argv.mode) || 'development';
  process.env.BABEL_ENV = mode;

  const optimization =
    mode === 'production'
      ? {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              parallel: true,
              sourceMap: true,
            }),
          ],
        }
      : { minimize: false };

  const config = {
    devtool: 'source-map',
    mode,
    entry: {
      index: './src/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/[name].[hash].js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
          resolve: {
            extensions: ['.js', '.jsx'],
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        // {
        //   test: /\.css$/,
        //   use: ExtractTextPlugin.extract({
        //     fallback: 'style-loader',
        //     use: [
        //       'style-loader',
        //       {
        //         loader: 'css-loader',
        //         options: { importLoaders: 1, sourceMap: true },
        //       },
        //     ],
        //   }),
        // },
      ],
    },
    plugins: [
      new Dotenv(),
      // new BundleAnalyzerPlugin(),
      new HtmlPlugin({
        template: './src/index.html',
        mode,
      }),
    ],

    devServer: {
      disableHostCheck: true,
      host: '0.0.0.0',
      historyApiFallback: {
        index: '/',
      },
    },
    optimization,
  };

  return config;
};
