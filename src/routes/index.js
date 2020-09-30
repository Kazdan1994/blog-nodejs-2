const { Router } = require('express');
const Post = require('../db/models/postModel');

module.exports = function () {
    const app = Router();

    app.get('/', async function (req, res) {
        const posts = await Post.find({});

        res.render('index', {
            posts
        })
    })
    app.get('/post/:id', async function (req, res) {
        const post = await Post.findById(req.params.id);

        res.render('show', {
            post
        })
    })

    return app;
}