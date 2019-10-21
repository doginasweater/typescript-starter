import path from 'path';
import webpack from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const commonConfig: webpack.Configuration = {
  // enntry point to the app. first file to load.
  entry: {
    app: './src/index.tsx'
  },

  // only work with these extensions (please)
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ]
  },

  // files to actually output
  output: {
    path: path.resolve('./dist'), // where do the files go
    filename: '[name].js', // name of the main bundle
    publicPath: '/', // necessary for dev server
  },

  module: {
    rules: [
      // typescript
      {
        test: /\.tsx?$/, // files ending in .ts or .tsx
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          },
        },
      },

      // static files
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: 'file-loader',
      },

      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },

      // styles (scss)
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  // plugins are helpers that run along with webpack
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};