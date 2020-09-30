const Post = require("../db/models/postModel");

exports.find = async function (options = {}) {
    return Post.find(options)
        .sort('field -createdAt')
        .sort('field -updatedAt');
}

exports.findOne = async function (options = {}) {
    return Post.findOne(options);
}

exports.create = async function (body) {
    return Post.create(body)
}

exports.update = async function (id, body) {
    return Post.findByIdAndUpdate(id, body, {
        new: true
    }, function (err, doc) {
        if (err) {
            throw err;
        }
        return doc;
    })
}

exports.delete = async function (id) {
    return Post.deleteOne({ _id: id })
}
