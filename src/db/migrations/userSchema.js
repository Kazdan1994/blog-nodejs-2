const { Schema } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema();

UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;
