const express = require("express");
const Checker = require("../controller/checker");
const router  = express.Router()


router.post('/',Checker);

module.exports = router