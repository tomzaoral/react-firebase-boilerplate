//inspired by https://github.com/collardeau/react-scaffold/tree/master/src/scripts

var webpack = require('webpack');

var config = {
    devtool: 'eval',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './app/App.js'
        ],
        vendor: [
            'react',
            'firebase'
        ]
    },
    output: {
        path: './public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loaders: ['react-hot', 'jsx-loader', 'babel'], exclude: /node_modules/},
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;