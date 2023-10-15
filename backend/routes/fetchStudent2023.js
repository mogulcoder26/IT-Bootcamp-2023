const express = require('express')
const router  = express.Router();
const fetchUserList23 = require('../controller/fetchUserList23.js')

router.get('/',fetchUserList23);

module.exports = router;
