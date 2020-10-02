const AuthController = require('../../controller/authController');
const isLogin = require('../../middlewares/auth');
const passport = require("passport");

module.exports = function (app) {
    app.get('/register', AuthController.register)
    app.get('/login', AuthController.login)
    app.get('/logout', AuthController.logout)

    app.post('/register', AuthController.signup);
    app.post('/login', (req, res, next) => {
        passport.authenticate('local',
            (err, user, info) => {
                if (err) {
                    return next(err);
                }

                if (!user) {
                    req.flash('error', [info])
                        .then(() => res.redirect('/login'))
                }

                req.logIn(user, function(err) {
                    if (err) {
                        return next(err);
                    }

                    return res.redirect('/');
                });

            })(req, res, next);
    });
}
