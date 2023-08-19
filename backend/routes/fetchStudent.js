const express = require('express')
const router  = express.Router();
const fetchUserList = require('../controller/fetchUserList.js')

router.get('/',fetchUserList);

module.exports = router;
