var mongoose = require('mongoose');
var connection = require('../index');

connection.connect();

var ExampleScheme = new mongoose.Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model('Example', ExampleScheme);
