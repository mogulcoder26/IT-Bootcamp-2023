const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6969;
const fs = require("fs")
const path = require("path");
const https = require("https")
const connect = require("./db/connection/connect");
const createUserRoute = require("./routes/createUser.js")
const bodyParser = require("body-parser")
const fetchStudentRoute22  = require('./routes/fetchStudent2022.js')
const fetchStudentRoute23  = require('./routes/fetchStudent2023.js')
const checkRegistrationRoute = require("./routes/checkRegistrationRoute.js")
const updateRoute = require("./routes/updateRoute.js")
connect();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/register/profile/it/securev0',createUserRoute);
app.use('/student/profile/it/registered/2022',fetchStudentRoute22)
app.use('/student/profile/it/registered/2023',fetchStudentRoute23)
app.use('/checkIfRegistered',checkRegistrationRoute)
app.use('/update',updateRoute)

const sslServer = https.createServer({
    key:fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'cert','cert.pem')),
},app)

sslServer.listen(6969,()=>{
    console.log(`Server is running on port ${PORT}`);
})