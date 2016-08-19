var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var DefinePlugin = require('webpack/lib/DefinePlugin');


module.exports = webpackMerge(commonConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.runtime': '"production"',
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ]
});