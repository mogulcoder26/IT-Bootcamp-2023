const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        unique: true
    },    
    email :{
        type: String,
        required: true,
        unique: true
    }
    ,
    phone :{
        type: String,
        required: true,
        unique: true
    }
    ,
    bio :{
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: new Date().getUTCDate().toLocaleString()
    }
});


module.exports = mongoose.model('Form', formSchema);