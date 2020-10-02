const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require('../db/models/userModel');

module.exports = function (app) {
    app.use(passport.initialize({}));
    app.use(passport.session({}));

    passport.use('local',
        new LocalStrategy( { usernameField: 'email' },
            User.authenticate()));

    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
}
