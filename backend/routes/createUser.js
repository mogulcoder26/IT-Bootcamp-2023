const express = require('express')
const router  = express.Router();
const createHomie = require('../controller/createHomie.js')

router.post('/',createHomie)

module.exports = router;
