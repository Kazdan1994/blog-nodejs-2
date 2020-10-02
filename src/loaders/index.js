const expressLoader = require('./express');
const ejsLoader = require('./ejs');
const mongooseLoader = require('./mongoose');
const sessionLoader = require('./session');
const passportLoader = require('./passport');

module.exports = async function (app) {
    await sessionLoader(app);
    await passportLoader(app);
    await expressLoader(app);
    await ejsLoader(app);
    await mongooseLoader();
}
