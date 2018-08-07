var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: './build',
        filename: 'index.js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/react/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: [
                        'transform-decorators-legacy', [
                            "transform-runtime", {
                                "polyfill": false,
                                "regenerator": true
                            }], 'transform-object-assign', [
                            'import', {
                                'libraryName': 'antd',
                                'style': true
                            }]],
                    presets: ['es2015', 'stage-0', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.less/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]---[local]-----[hash:base64:5]!less'
            }, {
                test: /\.(eot|woff|woff2|svg|ttf|gif)([\?]?.*)$/,
                loader: 'file-loader'
            }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'), new webpack.DefinePlugin({
            ENV: JSON.stringify('prod')
        }), new HtmlWebpackPlugin({
            template: "index.html",
            hash: true,
        })],
}