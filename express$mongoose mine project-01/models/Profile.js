// TODO user, title, profilepic, link{fb, twiter, github}, posts, bookmarks


const {Schema, model} = require('mongoose')

// const Post = require('./Post')
// const User = require('./Usre')

const ProfileSchema = new Schema({
    user: {
        type: Schema.Type.ObjectId,
        // ref: User,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10
    },
    title: {
        type: String,
        trim: true,
        maxlength: 100
    
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 300

    },
    profilePic: String,
    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String


    },
    post: [
        {
            type: Schema.Type.ObjectId,
            // ref: Post

        }
    ],
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            // ref: Post
        }
    ]

}, {
    timestamps: true
})


const Profile = model('Profile', ProfileSchema)

module.exports = Profile

