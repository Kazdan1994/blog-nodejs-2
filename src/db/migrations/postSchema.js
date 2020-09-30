const { Schema } = require('mongoose');

const PostSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    description: String,
    image: String,
    body: String,
    published: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

module.exports = PostSchema;
