const { Router } = require('express');
const postRoutes = require('./post')
const apiRoute = require('./api')

module.exports = function () {
    const app = Router();

    postRoutes(app);
    apiRoute(app);

    return app;
}
