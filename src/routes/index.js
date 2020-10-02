const { Router } = require('express');
const postRoutes = require('./web/post')
const postApiRoute = require('./api/post')
const authRoutes = require('./web/auth.js')

module.exports = function () {
    const app = Router();

    authRoutes(app);
    postRoutes(app);
    postApiRoute(app);

    return app;
}
