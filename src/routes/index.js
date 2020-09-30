const { Router } = require('express');
const postRoutes = require('./post')

module.exports = function () {
    const app = Router();

    postRoutes(app);

    return app;
}
