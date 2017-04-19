var express = require('express');
var server = require('./server');
var config = require('./server/node_modules/common/config/env');

var app = express();
var admin = express();

app.use('/admin', admin);

server.start(app, config.front, true);
server.start(admin, config.admin, false);

