const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },    
    email :{
        type: String,
        required: true,
        // unique: true,
    },  
    imageKey :{
        type : String,
        required :false,
        // unique :true,
    },
    id :{
        type: String,
        required: true,
        // unique: true,
    },
    about :{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
      },
    linkedin :{
        type : String,
        required: false,
        unique : true,
    },
    github :{
        type : String,
        required: false,
        unique : true,
    },
    insta :{
        type : String,
        required: false,
        unique : true,
    }
});

module.exports = mongoose.model('Form', formSchema);