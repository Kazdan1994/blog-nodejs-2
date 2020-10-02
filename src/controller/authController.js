const Joi = require('joi');

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
       await schema.validateAsync(req.body);

       res.redirect('/');
    }
    catch (err) {
        await req.flash('error', err.details)
        res.redirect('register');
    }

    // Crée un nouvel utilisateur
}
