const express = require('express')
const router  = express.Router();
const updateUser = require("../controller/updateUser.js")
const multer = require('multer');
const updates = multer({ dest: 'updates/' })

router.post('/',updates.single('studentPic'),updateUser);

module.exports = router;
