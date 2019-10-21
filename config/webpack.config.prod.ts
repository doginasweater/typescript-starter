import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { commonConfig } from './webpack.config.common';

const prodConfig: webpack.Configuration = webpackMerge(commonConfig, {
  // turns on several options such as minifying, tree shaking
  mode: 'production',

  // override the output with hashes for cache busting
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js'
  },

  // modify the scss rules to make a separate stylesheet
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer"),
              ],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  // optimization talks about code splitting and minimization. this configuration makes a single runtime
  // chunk, as well as a vendor chunk
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single'
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
  ],
});

export default prodConfig;