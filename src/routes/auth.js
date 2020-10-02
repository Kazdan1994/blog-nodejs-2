const AuthController = require('../controller/authController');

module.exports = function (app) {
    app.get('/register', AuthController.register)
    app.get('/login', AuthController.login)
}