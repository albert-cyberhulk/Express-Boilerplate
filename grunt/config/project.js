var appPath = require('../../package.json').appPath || 'server';
var path = require('path');
var feAssets = path.join(appPath, 'public', 'front', 'src');

module.exports = {
    app: appPath,
    styles: {
        dist: path.join(feAssets, 'styles', 'css'),
        src: path.join(feAssets, 'styles', 'scss')
    }
};
