// TODO: Name, Email, Password, and profile
const {Schema, model} = require('mongoose')
// const Profile = require('./Profile')

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        maxlength: 40,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    profile: {
        type: Schema.Types.ObjectId,
        // ref: Profile

    }
}, {
    timestamp: true,




})
// todo triee
const User = model('User', userSchema)

module.exports = User