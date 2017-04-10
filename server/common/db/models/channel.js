var mongoose = require('mongoose');

var ChannelScheme = new mongoose.Schema({
    name: {type: String, required: true},
    client: {type: String, required: true},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Channel', ChannelScheme);