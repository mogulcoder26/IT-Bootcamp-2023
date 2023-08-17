const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser"); 
const PORT = 6969;
const connect = require("./db/connection/connect");
const createUserRoute = require("./routes/createUser.js")
connect();
app.use(cors())

app.use('/register/profile/it/securev0',createUserRoute);


app.listen(6969,()=>{
    console.log(`Server is running on port ${PORT}`);
})