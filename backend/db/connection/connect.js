const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://b422056:4xWDvu8OnOAUo5Sh@itb.b6ocgev.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection SUCCESS');
    }
    catch (error) {
        console.error('MongoDB connection Faulty');
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = connectDB;
