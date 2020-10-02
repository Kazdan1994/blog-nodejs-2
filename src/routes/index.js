const { Router } = require('express');
const postRoutes = require('./post')
const apiRoute = require('./api')
const authRoute = require('./auth')

module.exports = function () {
    const app = Router();

    authRoute(app);
    postRoutes(app);
    apiRoute(app);

    return app;
}
