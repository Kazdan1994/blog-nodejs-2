const express = require('express');
const path = require('path');
const { flash } = require('express-flash-message');
const routes = require('../routes');
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

    app.use('/', express.static(path.resolve(__dirname, '../../public')));
    app.set('views', path.resolve(__dirname, '../views'));

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use(flash({ sessionKeyName: 'flashMessage' }));

    app.use(routes());
}
