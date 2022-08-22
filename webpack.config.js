const path = require('path');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'webpack-build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/
            }, 
            {
                test: /\.ts/, 
                use: 'ts-loader'
            }
        ]
    }, 
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new WebpackObfuscator ({
            rotateStringArray: true
        })
    ]
};