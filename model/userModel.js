const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
    type: String,
    require: [true, "Name is required, kindly fill in your name"]
    },

    age: {
    type: Number,
    require: [true, "fill in your age"]
    },

    isAdmin: {
    type: Boolean,
    default: false
    }

}, {timestamps: true})

    const userModel = mongoose.model("data", userData)

    module.exports = userModel