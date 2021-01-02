const { join } = require('path');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';
const isTest = environment === 'test';
const isDev = environment === 'development';

if (isDev || isTest) {
  const file = isDev ? '.dev' : '.test';
  
  require('dotenv').config({ path: join(__dirname, '.env', file) });
}

module.exports = (env) => {
  const isProduction = !!env?.production;

  return {
    entry: ['./src/App.tsx'],
    output: {
      path: join(__dirname, 'public'),
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.[tj]s(x?)$/,
          exclude: /node_modules/,
        },
        {
          test: /\.(s?)css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      new DefinePlugin({
        'process.env.COUNTER_TERM': JSON.stringify(process.env.COUNTER_TERM),
      })
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    optimization: {
      minimizer: isProduction ? [new TerserWebpackPlugin()] : [],
    },
    devServer: {
      contentBase: join(__dirname, 'public'),
      historyApiFallback: true,
      open: true,
      hot: true,
    },
  };
};