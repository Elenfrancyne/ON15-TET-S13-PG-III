const mongoose = require('mongoose');
constnoteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
module.exports = mongoose.node('note', noteSchema)