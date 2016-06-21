'use strict';

// Modules
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// Identify the environment
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch' || ENV === 'test-coverage';
var isProd = ENV === 'build' || ENV === '';
var isWatching = ENV === 'test-watch' || ENV === 'serve';

module.exports = function makeWebpackConfig() {

    var config = {};

    //Entry
    config.entry = {app: "./app/app.js"};

    //Output
    config.output = isTest ? {} : {
        // Absolute output directory
        path: __dirname + '/build',
        // Output path from the view of the page
        // Uses webpack-dev-server in development
        publicPath: isProd ? '/' : 'http://localhost:8080/',

        // Filename for entry points
        // filename: 'bundle.[name].[hash].js',
        filename: 'bundle.js',

        // Filename for non-entry points
        // Only adds hash in build mode
        chunkFilename: 'bundle.[name].[hash].js'

    };
    // Devtool

    if (isTest) {
        config.devtool = isWatching ? '' : 'inline-source-map';
    } else if (isProd) {
        config.devtool = ENV === 'build-sourcemap' ? 'cheap-module-eval-source-map' : '';
    } else {
        config.devtool = '#eval-source-map';
    }


    //Loaders
    config.module = {
        preLoaders: [],
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {
                test: /stampit\.js$/, loader: 'string-replace',
                query: {
                    search: '{ args: args, instance: instance, stamp: factory }',
                    replace: '{ args: args, instance: instance, stamp: factory, original: refs }'
                }
            },
            {
                test: /angular\.js$/, loader: 'string-replace',
                query: {
                    multiple: [
                        {
                            search: 'angular',
                            replace: 'angularHT',
                            flags: 'g'
                        },
                        {
                            search: 'angularHTInit(window.document, bootstrap);',
                            replace: ''
                        }
                    ]
                }
            },
            {test: /\.jade/, loader: 'jade'},
            //{ test: /\.css$/, loader: isTest ? 'null' : 'style!css' },
            //{ test: /\.scss$/, loader: isTest ? 'null' : 'style!css!sass' },

            // Images
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'file?name=images/[name].[ext]'},
            {test: /\.svg(.*)$/, loader: 'file?name=images/[name].[ext]'},

            // Fonts
            {test: /\.woff2(.*)$/, loader: 'url?limit=100000&mimetype=application/font-woff2&name=fonts/[name].[ext]'},
            {test: /\.woff(.*)$/, loader: 'url?limit=100000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
            {test: /\.ttf(.*)$/, loader: 'url?limit=100000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
            {test: /\.eot(.*)$/, loader: 'file?name=fonts/[name].[ext]'}
        ]
    };

    // Coverage Reporter (ISSPARTA)
    if (isTest) {
        config.module.preLoaders.push({
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.spec\.js$/
            ],
            loader: 'isparta-instrumenter'
        })
    }

    //Resolve
    config.resolve = {
        modulesDirectories: [
            "node_modules",
            "./plugins"
        ]
    };

    //Plugins
    config.plugins = [
        new webpack.ProvidePlugin({
            angular: 'angular-mod',
            'window.angular': 'angular-mod'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ];


    return config;

};