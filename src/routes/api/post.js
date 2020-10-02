const PostService = require('../../services/postService');
const PostApiController = require('../../controller/postApiController');

module.exports = function (app) {
    app.get('/api/posts', PostApiController.index)

    app.get('/api/posts/:id', PostApiController.show)

    // Route pour créer un post
    app.post('/api/posts', PostApiController.create)

    app.put('/api/posts/:id', PostApiController.update)

    app.delete('/api/posts/:id', PostApiController.delete)
}