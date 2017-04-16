var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');

module.exports = {
    startApp: function () {
        app.engine('.html', require('ejs').__express);
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'public/front/src/views/'));

        app.use(cookieParser());

        app.get('/', function (request, response) {
            response.send("<h1>Hello world</h1>");
        });

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(compression({
            filter: function (req, res) {
                return compression.filter(req, res)
            }
        }));

        app.listen(3000, function () {
            var port = this.address().port;
            console.log('Express server listening on port', port);
        });
    }
};
