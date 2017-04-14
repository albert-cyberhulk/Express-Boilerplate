module.exports = [
    {
        url: '/404.html',
        method: 'get',
        handler: './handlers/404',
        siteMap: {
            changefreq: 'monthly',
            priority: 0.5
        }
    }
];
