const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser"); 
const PORT = 6969;

app.get('/',(req,res)=>{
    res.send("Works");
})

app.listen(6969,()=>{
    console.log(`Server is running on port ${PORT}`);
})