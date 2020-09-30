const { model } = require('mongoose');
const postSchema = require('../migrations/postSchema');

const Post = model('Post', postSchema);

module.exports = Post;
