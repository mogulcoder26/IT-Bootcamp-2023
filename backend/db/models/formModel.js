const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },    
    email :{
        type: String,
        required: true,
        unique: true,
    },    
    id :{
        type: String,
        required: true,
        unique: true,
    },
    about :{
        type: String,
        required: true,
    },
    CreatedAt: {
        type: Date,
        default: new Date().getUTCDate().toLocaleString()
    },
    linkedin :{
        type : String,
        required: false,
        unique : true,
    },
    github :{
        type : String,
        required: true,
        unique : true,
    }
});

module.exports = mongoose.model('Form', formSchema);