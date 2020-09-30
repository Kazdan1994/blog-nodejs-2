module.exports = function (app) {
    app.engine('ejs', require('ejs').__express);
    app.set('view engine', 'ejs');
}
