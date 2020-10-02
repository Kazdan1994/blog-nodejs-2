const Joi = require('joi');
const bcrypt = require('bcrypt');
const User = require('../db/models/userModel');
const brypt = require("bcrypt");

exports.register = async function (req, res) {
    res.render('register', {
        errors: await req.consumeFlash('error')
    });
}

exports.login = async function (req, res) {
    res.render('login', {
        errors: await req.consumeFlash('error')
    });
}

exports.signup = async function (req, res) {
    // Valider les données
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirmPassword: Joi.ref('password'),
        email: Joi.string()
            .email({ minDomainSegments: 2 })
    })

    try {
       const value = await schema.validateAsync(req.body);

       User.register({
           username: value.email,
           active: true,
       }, value.password, function (err, result) {
           if (err) {
               console.error(err);
           }
           const authenticate = User.authenticate();
           authenticate(value.email, value.password, function(err, result) {
               if (err) { console.error(err) }

               // Value 'result' is set to false. The user could not be authenticated since the user is not active
           });
           res.redirect('/');
       })
    }
    catch (err) {
        await req.flash('error', err.details)
        res.redirect('register');
    }
}

exports.signin = async function (req, res) {
    const { email, password } = req.body

    // Trouver l'utilisateur qui correspond avec son email
    const user = await User.findOne({ username: email })

    if (!user) {
        await req.flash('error', 'email seems not exists')
        res.redirect('/login')
    }

    const auth = await User.authenticate()(user.email, password);

    console.log(auth);
}
