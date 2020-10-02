const PostController = require('../../controller/postController');

module.exports = function (app) {
    app.get('/', PostController.index);
    app.get('/post/:id', PostController.show)
    app.get('/blog/new', PostController.new)
    app.post('/blog/new', PostController.create)
    app.get('/blog/edit/:id', PostController.edit)
    app.post('/blog/edit/:id', PostController.update)
    app.get('/blog/delete/:id', PostController.delete)
}