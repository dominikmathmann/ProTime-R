var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: {
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    resolve: {
        extensions: ['', '.js', '.ts', 'css']
    },
    devtool: 'source-map',
    output: {
        path: './target',
        filename: '[name].bundle.js',
    },
    devServer: {
        port: 4300
    },
    htmlLoader: {
        minimize: false // workaround for ng2
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file?name=images/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: /\/components\//,
                loader: "style!css"
            },
            {
                test: /\.css$/,
                include: /\/components\//,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './src/index.html',
            favicon: './src/assets/images/logoR.png'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};