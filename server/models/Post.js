const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    title: String,
    brand: String,
    category: String,
    price: Number,
    description: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Post', PostSchema)
