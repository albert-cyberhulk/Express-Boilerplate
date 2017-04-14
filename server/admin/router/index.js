module.exports = function (admin) {
    admin.get('/', require('./handlers/home'));
};
