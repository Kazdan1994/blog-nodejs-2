const session = require("express-session");
const cookieParser = require('cookie-parser');

module.exports = function (app) {
    app.use(cookieParser());
    app.use(session({
        secret: "1234567890QWERTY",
        resave: true,
        store: new session.MemoryStore(),
        saveUninitialized: true
    }));
}