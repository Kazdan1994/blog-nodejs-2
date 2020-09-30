const Post = require("../db/models/postModel");

exports.find = async function (options = {}) {
    return Post.find(options)
        .sort('field -createdAt')
        .sort('field -updatedAt');
}

exports.findOne = async function (options = {}) {
    return Post.findOne(options);
}