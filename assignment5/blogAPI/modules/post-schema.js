const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    postDate: Date,
    featuredImage: String,
    post: String,
    postedBy: String,
    comments: [{ author: String, comment: String, date: Date }],
    category: String,
    tags: [String],
    isPrivate: Boolean,
    views: Number
});

module.exports = postSchema;