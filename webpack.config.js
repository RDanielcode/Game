const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve:{
        extensions :['.js']
    },

    mode: 'production',

    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },

            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },

            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },

    stats: {
        children: true
    },

    plugins:[
        new HtmlPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),

        // new MiniCssPlugin({
        //     filename: '[name].css'
        // }), 
    ],

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3006
      }
}