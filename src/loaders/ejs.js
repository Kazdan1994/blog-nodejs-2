module.exports = function (app) {
    app.engine('ejs', require('ejs-locals'));
    app.set('view engine', 'ejs');
}
