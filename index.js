var express = require('express');
var server = require('./server');
var config = require('./server/node_modules/common/config/env');

var app = express();
var admin = express();

app.get('/', function (request, response) {
    response.send('<h1>Hello world</h1>');
});

app.listen(config.port, function () {
    console.log('Express server listening on port', config.port);
});

app.use('/admin', admin);

server.start(app, config.front);
server.start(admin, config.admin);

