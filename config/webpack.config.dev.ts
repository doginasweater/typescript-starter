import webpack from 'webpack';

import webpackMerge from 'webpack-merge';
import { commonConfig } from './webpack.config.common';

const devConfig: webpack.Configuration = webpackMerge(commonConfig, {
  // mode sets several common options
  mode: 'development',

  // devtool allows you to set sourcemap generation
  devtool: 'inline-source-map',

  // information for webpack-dev-server
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

export default devConfig;