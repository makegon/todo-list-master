const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        //'react-hot-loader/patch',
        //'@babel/polyfill',
        path.resolve(__dirname, 'src', 'index.web.js') // обязательный путь
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json', 'web.js', 'web.jsx', 'web.json' ],
        alias: {
            '~': path.resolve(__dirname, '..', 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/, /* исключение папки */
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/assets/',
                    outputPath: 'assets/'
                }
            }
        ],
    },
    devtool: 'eval-source-map',
    devServer: { // постоянно мониторит приложение npm i --save-dev webpack-dev-server

        contentBase: path.resolve(__dirname, '..', 'dist'),
        host: 'localhost',
        port: 3003,
        historyApiFallback: true, //отслеживает url изменение
        // hot: true,
        inline: true, //подключение самого себя, по умолчанию false
        noInfo: true, // только ошибки
        progress: true, // загрузка в консоли
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(), // хот релоад
        new webpack.DefinePlugin({ // переменные
            'process.env': { 'NODE_ENV': '"development"' },
        }),
        //new cleanPlugin(['../dist']), // при сборке очищает папку
        new htmlPlugin({ //
            template: path.resolve(__dirname,'public', 'index.html'),
            inject: 'body'
        })
    ],
};
