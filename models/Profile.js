const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        // required: true,
    },
    aboutme: {
        type: String,
    },
    profileage: {
        type: Number,
        // required: true
    },
    email: {
        type: String,
        // required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = Profile = mongoose.model("profiles", ProfileSchema);