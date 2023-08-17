const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser"); 
const PORT = 6969;
const imgUpload = require('./routes/images')
const connect = require("./db/connection/connect");
connect();
app.use(cors())

app.use('/upload',imgUpload);


app.listen(6969,()=>{
    console.log(`Server is running on port ${PORT}`);
})