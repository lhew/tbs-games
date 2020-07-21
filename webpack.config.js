const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { parsed } = require('dotenv').config();
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const mode = (argv && argv.mode) || 'development';
  process.env.BABEL_ENV = mode;

  const optimization =
    mode === 'production'
      ? {
          minimizer: [
            new TerserPlugin({
              test: /\.js(\?.*)?$/i,
            }),
          ],
        }
      : {
          minimize: false,
        };

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
      ],
    },
    plugins: [
      new Dotenv(),

      new HtmlPlugin({
        template: './src/index.html',
        mode,
        toolkit: parsed.TOOLKIT_PATH,
      }),
    ],
    optimization,
    devServer: {
      disableHostCheck: true,
      host: '0.0.0.0',
    },
  };

  return config;
};
