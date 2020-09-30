const PostService = require('../services/postService');

module.exports = function (app) {
    app.get('/api/hello', function (req, res) {
        res.send({
            message: 'hello'
        })
    })

    app.get('/api/posts', async function (req, res) {
        const posts = PostService.find();

        res.send(posts)
    })

    app.get('/api/posts/:id', async function (req, res) {
        const post = await PostService.findOne({ _id: req.params.id });

        res.send(post)
    })
}