const { Router } = require('express');

const postRoutes = require('./web/post')
const postApiRoute = require('./api/post')

module.exports = function () {
    const app = Router();

    postRoutes(app);
    postApiRoute(app);

    return app;
}
