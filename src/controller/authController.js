const Joi = require('joi');
const User = require('../db/models/userModel');

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
       await schema.validateAsync(req.body);

        User.register(new User({
            username: req.body.email,
            email: req.body.email,
            password: req.body.password
        }),
            req.body.password,
            function(err) {
            if (err) {
                return req.flash('error', [err])
                    .then(() => next(err));
            }
            res.redirect('/');
        });
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

    await User.authenticate()(user.email, password);
}

exports.logout = async function (req, res) {
    await req.logout();

    res.redirect('/login');
}
