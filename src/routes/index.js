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
    app.get('/blog/new', async function (req, res) {
        res.render('new')
    })
    app.post('/blog/new', async function (req, res) {
        await Post.create(req.body);

        res.redirect('/');
    })

    app.get('/blog/edit/:id', async function (req, res) {
        const post = await Post.findById(req.params.id);

        res.render('edit', {
            post
        })
    })
    app.put('/blog/edit/:id', async function (req, res) {
        console.log(req.body);
    })

    app.get('/post/:id', async function (req, res) {
        const post = await Post.findById(req.params.id);

        res.render('show', {
            post
        })
    })

    return app;
}
