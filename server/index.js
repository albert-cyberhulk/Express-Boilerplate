var express = require('express');
var bodyParser = require('body-parser');
var i18n = require('i18n-express');
var compression = require('compression');

var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');

module.exports = {
    startApp: function (app, router) {
        app.engine('.html', require('ejs').__express);
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'public/front/src/views/'));

        app.use(cookieParser());

        app.use(express.static(path.join(__dirname, 'public/front/src/')));

        app.get('/', function (request, response) {
            response.send('<h1>Hello world</h1>');
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

        app.use(i18n({
            translationsPath: path.join(__dirname, 'node_modules/common/i18n/locales'),
            siteLangs: ['en'],
            browserEnable: false,
            defaultLang: process.env.LNG || 'en'
        }));

        app.use('/', router);

        require('front/router')(router);

        app.listen(3000, function () {
            var port = this.address().port;
            console.log('Express server listening on port', port);
        });
    },
    startAdmin: function (admin) {
        admin.engine('.html', require('ejs').__express);
        admin.set('view engine', 'ejs');
        admin.set('views', path.join(__dirname, 'public/admin/src/views/'));

        admin.use(express.static(path.join(__dirname, 'public/admin/src/')));

        admin.use(bodyParser.json());
        admin.use(bodyParser.urlencoded({
            extended: true
        }));
    }
};
