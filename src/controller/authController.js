const Joi = require('joi');
const bcrypt = require('bcrypt');
const User = require('../db/models/userModel');

exports.register = async function (req, res) {
    res.render('register', {
        errors: await req.consumeFlash('error')
    });
}

exports.login = async function (req, res) {
    res.render('login');
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

       value.password = await bcrypt.hash(value.password, 10);

       const user = await User.create(value);

       console.log(user);

       res.redirect('/');
    }
    catch (err) {
        await req.flash('error', err.details)
        res.redirect('register');
    }

    // Crée un nouvel utilisateur
}

exports.signin = async function (req, res) {

}
