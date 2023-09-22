const express = require('express')
const router  = express.Router();
const createHomie = require('../controller/createHomie.js')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

router.post('/',upload.single('studentPic'),createHomie,async (req,res)=>{
    res.send("Handled!")
    res.send("Success");
})

module.exports = router;
