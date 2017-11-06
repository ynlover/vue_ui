var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        //vueUI:'./src/index.js',
        demo: './demo/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),//Webpack结果存储
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            //自己加的
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
            ,
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader!"
            }
        ]
    },
    resolve: {
        alias: {
            components: './src/components/',
            vue: 'vue/dist/vue.js'
        }
    },
    performance: {
        hints: false
    },
    devtool: 'none'
}

// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false
//             }
//         }),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         })
//     ])
// }
//
