var webpack = require('webpack');
let test = 'http://10.33.108.67:12804/'
let dev = 'http://10.30.128.247:12804/'
let url = dev
module.exports = {
    entry: './src/main.js',
    output: {
        path: './build',
        filename: 'index.js',
        chunkFilename: '[name].chunk.js'
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
            ENV: JSON.stringify('dev')
        })],
    devServer: {
        inline: true,
        port: 9980,
        publicPath: "/build/",
        disableHostCheck: true,
        proxy: {
            '/mock/*': {
                target: 'http://localhost:9981',
                secure: false
            },
            '/20000/*': {
                target: url,
                secure: false
            }
        }
    },
    devtool: '#inline-source-map',
}
