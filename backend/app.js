const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6969;
const connect = require("./db/connection/connect");
const createUserRoute = require("./routes/createUser.js")
const bodyParser = require("body-parser")
const fetchStudentRoute  = require('./routes/fetchStudent.js')
connect();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/register/profile/it/securev0',createUserRoute);
app.use('/student/profile/it/registered/v0',fetchStudentRoute)

app.listen(6969,()=>{
    console.log(`Server is running on port ${PORT}`);
})