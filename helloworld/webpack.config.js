//webpack.config.js
module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    devtool:'source-map',
    debug:true,
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015','react']
            }
        }]
    }
};
