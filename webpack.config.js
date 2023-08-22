import { HotModuleReplacementPlugin } from 'webpack';
import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const production = process.env.NODE_ENV === 'production';

export const entry = {
  myAppName: _resolve(__dirname, './index.tsx'),
};
export const output = {
  path: _resolve(__dirname, './dist'),
  filename: production ? '[name].[contenthash].js' : '[name].js',
};
export const module = {
  rules: [
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.s(a|c)ss$/,
      exclude: /node_modules/,
      use: [
        production ? MiniCssExtractPlugin : 'style-loader',
        {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: !production,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            modules: true,
            sourceMap: !production,
          },
        },
      ],
    },
  ],
};
export const resolve = {
  extensions: ['*', '.js', '.jsx', '.scss'],
};
export const plugins = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'Webpack & React',
    template: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: production ? '[name].[contenthash].css' : '[name].css',
  }),
];
export const devServer = {
  port: 3000,
  hot: true,
};
export const mode = production ? 'production' : 'development';
