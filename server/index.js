var express = require('express');
var app = express();
var path = require('path');

module.exports = {
    startApp: function () {
        app.engine('.html', require('ejs').__express);
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'public/front/src/views/'));

        app.get('/', function (request, response) {
            response.send("<h1>Hello world</h1>");
        });

        app.listen(3000, function () {
            var port = this.address().port;
            console.log('Express server listening on port', port);
        });
    }
};
