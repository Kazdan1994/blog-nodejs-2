const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require('../db/models/userModel');

passport.use('local', new LocalStrategy( { usernameField: 'email' }, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
