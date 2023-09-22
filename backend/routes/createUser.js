const express = require('express')
const router  = express.Router();
const createHomie = require('../controller/createHomie.js')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/',upload.single('studentPic'),(req,res)=>{
    const { name, email,id, about,linkedin,github} = req.body;
    console.log("File =  ",req?.file)
    console.log({
        name, email,id, about,linkedin,github
    })
    console.log("request !!");
    res.send("OK")
})

module.exports = router;
