const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: [
                  'last 2 verions'
                ]
              },
              sourceMap: true,
              plugins: () => {
                autoprefixer
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers')
              }
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }), 
    new HtmlWebpackPlugin({
      title: 'Rust Venezuela',
      template: './src/markup/index.hbs'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4200
  }
};
