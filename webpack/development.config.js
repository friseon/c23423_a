const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');

const SOURCE_PATH = '../src';
const OUTPUT_PATH = '../public';
const PORT = 8080;

module.exports = {
    entry: [
        path.join(__dirname, SOURCE_PATH, 'index.js')
    ],
    output: {
        path: path.join(__dirname, OUTPUT_PATH),
        filename: 'assets/js/bundle.js',
        publicPath: './',
    },
    module: {
        rules: [
            {
                // preloader
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/svg/',
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpack({
            template: path.join(__dirname, SOURCE_PATH, '/index.html'),
            alwaysWriteToDisk: true,
            minify: {
                removeScriptTypeAttributes: true,
            }
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        stats: 'errors-only',
        host: 'localhost',
        port: PORT,
        contentBase: path.join(__dirname, OUTPUT_PATH),
        historyApiFallback: true,
        publicPath: '/',
    }
};
