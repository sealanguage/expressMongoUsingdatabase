const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
    },
    aboutme: {
        type: String,
    },
    profage: {
        type: Number,
    },
    email: {
        type: String,
    },
    date: {
        type: Date,
        defaault: Date.now
    }
})
module.exports = Profile = mongoose.model("profiles", ProfileSchema);