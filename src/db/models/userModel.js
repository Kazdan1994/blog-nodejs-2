const { model } = require('mongoose');
const UserSchema = require('../migrations/userSchema');

const User = model('User', UserSchema);

module.exports = User;
