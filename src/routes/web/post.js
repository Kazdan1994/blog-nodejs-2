const connectEnsureLogin = require('connect-ensure-login');
const PostController = require('../../controller/postController');

module.exports = function (app) {
    app.get('/', connectEnsureLogin.ensureLoggedIn({}), PostController.index);
    app.get('/post/:id', connectEnsureLogin.ensureLoggedIn({}), PostController.show)
    app.get('/blog/new', connectEnsureLogin.ensureLoggedIn({}), PostController.new)
    app.post('/blog/new', connectEnsureLogin.ensureLoggedIn({}), PostController.create)
    app.get('/blog/edit/:id',connectEnsureLogin.ensureLoggedIn({}), PostController.edit)
    app.post('/blog/edit/:id', connectEnsureLogin.ensureLoggedIn({}), PostController.update)
    app.get('/blog/delete/:id', connectEnsureLogin.ensureLoggedIn({}), PostController.delete)
}