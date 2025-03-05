const path = require('path');
const { auth } = require('./src/config');
const { config } = require('process');


module.exports = {
    mode: 'development',
    entry: {

    index: './src/index.js',
    auth: './src/auth.js',
    config: './src/config.js',
    songmanager: './src/songManager.js'
    },
    
     output: {
        
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    watch: true
}