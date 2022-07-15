const {Schema, model} = require('mongoose')


const contactSchema = new Schema({
    fastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 14,
        
        
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 14
    },
    email: {
        type: String,
        
        trim: true,

    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        trim: true,
        required: false
    },

    zip: {
        type: String,
        trim: true,
    },
    agree: {
        type: Boolean,
        

    }
    

})


const Contact = model('Contact', contactSchema)
module.exports = Contact













