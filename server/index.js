var allConfigs = require('common/config/env');
var express = require('express');
var bodyParser = require('body-parser');
var i18n = require('i18n-express');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var path = require('path');
var router = express.Router();

module.exports = {
    start: function (app, config, entry) {
        app.engine('.html', require('ejs').__express);
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, config.viewPath));

        app.use(cookieParser());

        app.use(express.static(path.join(__dirname, config.assets)));

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
        require(config.router)(router);

        if (entry) {
            app.listen(allConfigs.port, function () {
                console.log('Express server listening on port', allConfigs.port);
            });
        }
    }
};
