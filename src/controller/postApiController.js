const PostService = require("../services/postService");

exports.index = async function (req, res) {
    const posts = PostService.find();

    res.send(posts)
}

exports.show = async function (req, res) {
    const post = await PostService.findOne({ _id: req.params.id });

    res.send(post)
}

exports.create = async function (req, res) {
    const post = await PostService.create(req.body)

    res.send(post)
}

exports.update = async function (req, res) {
    const post = await PostService.update(req.params.id, req.body)

    res.send(post)
}

exports.delete = async function (req, res) {
    const post = await PostService.delete(req.params.id)

    res.send({
        message: 'Post supprimé avec succès'
    })
}
