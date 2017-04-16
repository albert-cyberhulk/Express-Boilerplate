var express = require('express');
var server = require('./server');
var router = express.Router();

var app = express();
var admin = express();

server.startApp(app, router);
server.startAdmin(admin);
