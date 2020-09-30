const mongoose = require('mongoose');

module.exports = async function () {
    await mongoose.connect('mongodb://localhost/blog-2', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, function (err) {
        if (err) {
            throw err;
        }
        console.log('db connected');
    });
}
