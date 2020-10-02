const expressLoader = require('./express');
const ejsLoader = require('./ejs');
const mongooseLoader = require('./mongoose');

module.exports = async function (app) {
    await expressLoader(app);
    await ejsLoader(app);
    await mongooseLoader();
}
