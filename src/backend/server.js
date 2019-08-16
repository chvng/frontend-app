const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const ip = process.env.IP || '0.0.0.0';

const path = require('path');

// (webpack-hot-middleware)
(() => {

    // Create & configure a webpack compiler
    const webpack = require('webpack');
    const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../../webpack.config');
    const compiler = webpack(webpackConfig);

    // Attaching webpack-dev-middleware to the compiler & the server
    app.use(require("webpack-dev-middleware")(compiler, {
        logLevel: 'warn',
        publicPath: webpackConfig.output.publicPath
    }));

    // Attaching webpack-hot-middleware to the compiler & the server
    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }));

})();

app.get('/api', function (req, res) {
    res.send('Hei, nå kan du lage kule applikasjoner!');
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

// Static assets
app.use(express.static('public'));

// Error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Uff, nå skjedde det noe galt');
});

// App start up
app.listen(port, ip);
console.log(`Server is running on http://${ip}:${port}`);

module.exports = app;