const Post = require('../db/models/postModel');
const PostService = require('../services/postService');

exports.index = async function (req, res) {
    const posts = await PostService.find();

    res.render('index', {
        posts,
        user: req.user
    })
}

exports.new = async function (req, res) {
    res.render('new', {
        user: req.user
    })
}

exports.create = async function (req, res) {
    await Post.create(req.body);

    res.redirect('/');
}

exports.edit = async function (req, res) {
    const post = await Post.findById(req.params.id);

    res.render('edit', {
        post,
        user: req.user
    })
}

exports.update = async function (req, res) {
    await Post.updateOne({ _id: req.params.id }, req.body);

    res.redirect('/')
}

exports.delete = async function (req, res) {
    await Post.deleteOne({ _id: req.params.id });

    res.redirect('/')
}

exports.show = async function (req, res) {
    const post = await Post.findById(req.params.id);

    res.render('show', {
        post,
        user: req.user
    })
}
