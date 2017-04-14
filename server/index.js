var express = require('express');
var app = express();

module.exports = {
    startApp: function () {
        app.get('/', function (request, response) {
            response.send("<h1>Hello world</h1>");
        });

        app.listen(3000, function () {
            var port = this.address().port;
            console.log('Express server listening on port', port);
        });
    }
};
