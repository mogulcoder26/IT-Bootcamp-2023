const express = require('express')
const router  = express.Router();
const createHomie = require('../controller/createHomie.js')
const multer = require('multer');
const uploadToS3  = require('../middlewares/@aws/uploadPictures.js');
const upload = multer({ dest: 'uploads/' })

router.post('/',upload.single('studentPic'),async (req,res)=>{
    const { name, email,id, about,linkedin,github} = req.body;
    console.log("File =  ",req?.file)
    console.log({
        name, email,id, about,linkedin,github
    })
    console.log("Uploading Image to S3")
    const result = await uploadToS3(req?.file)
    console.log(result);
    console.log("Upload Done!");
    res.send("OK")
})

module.exports = router;
