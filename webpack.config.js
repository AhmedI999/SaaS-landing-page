const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // or 'production'
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Injects styles into DOM
                    {
                        loader: 'css-loader', // Resolves CSS imports
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader', // Compiles Sass to CSS
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'expanded',
                                // Optionally add more sassOptions here
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader', // Handles HTML imports
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
};
