var mongoose = require('mongoose');

var Db = function () {
    this.connected = false;
    this.connection = null;
    this.connectionInProgress = false;
};

Db.prototype.connect = function () {
    this.connectionInProgress = true;
    if (!this.connected) {
        var uri = 'mongodb://127.0.0.1:27017';
        mongoose.connect(uri);
        this.connection = mongoose.connection;
        this.connection.on('error', function (err) {
            this.connectionInProgress = false;
            console.log('error', 'MongoDb error', err);
        }.bind(this));
        this.connection.once('open', function () {
            this.connected = true;
            this.connectionInProgress = false;
        }.bind(this));
    }
};

var dbConnection = new Db();

module.exports = dbConnection;
