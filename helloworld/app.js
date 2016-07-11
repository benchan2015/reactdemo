if(process.env.NODE_ENV == 'dev') {
  require('./webpack.dev.server')(app)
}

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var proxy = require('proxy-middleware');
var url = require('url');
module.exports = function(app) {
  app.use('/', proxy(url.parse('http://127.0.0.1:3000/')));
  var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true,
    stats: { colors: true },
  }).listen(3000, '127.0.0.1', function(err,result) {
    if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
  });
}