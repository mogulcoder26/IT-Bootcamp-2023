const express = require('express')
const router  = express.Router();
const createHomie = require('../controller/createHomie.js')
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploads = upload.fields({ name: "student_pic",maxCount:1});

router.post('/',uploads,createHomie)

module.exports = router;
