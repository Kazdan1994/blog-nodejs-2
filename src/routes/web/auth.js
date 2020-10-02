const AuthController = require('../../controller/authController');

module.exports = function (app) {
    app.get('/register', AuthController.register)
    app.get('/login', AuthController.login)

    app.post('/register', AuthController.signup);
    app.post('/login', AuthController.signin);
}