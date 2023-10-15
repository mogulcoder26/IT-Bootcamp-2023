const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6969;
const connect = require("./db/connection/connect");
const createUserRoute = require("./routes/createUser.js")
const bodyParser = require("body-parser")
const fetchStudentRoute22  = require('./routes/fetchStudent2022.js')
const fetchStudentRoute23  = require('./routes/fetchStudent2023.js')
const checkRegistrationRoute = require("./routes/checkRegistrationRoute.js")
connect();
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/register/profile/it/securev0',createUserRoute);
app.use('/student/profile/it/registered/2022',fetchStudentRoute22)
app.use('/student/profile/it/registered/2023',fetchStudentRoute23)
app.use('/checkIfRegistered',checkRegistrationRoute)

app.listen(6969,()=>{
    console.log(`Server is running on port ${PORT}`);
})