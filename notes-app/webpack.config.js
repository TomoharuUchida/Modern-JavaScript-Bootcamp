const path = require('path')

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js'],
        edit: ['babel-polyfill', './src/edit.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool:'source-map'
}

// .jsを文字列として扱うために\$を使う
// devtool:'source-map'を使うことで、babelでコンパイルされる前のコードを参照できる
// srcページが複数ある場合、entryページをそれぞれ設定する必要がある