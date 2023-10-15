const express = require('express')
const router  = express.Router();
const fetchUserList22 = require('../controller/fetchUserList22.js')

router.get('/',fetchUserList22);

module.exports = router;
