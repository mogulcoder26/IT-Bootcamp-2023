const express = require('express');
const router = express.Router();
const uploadPictures = require('../middlewares/@aws/uploadPictures.js');
const sayHi = require('../controllers/test.js');

router.get('/',sayHi);

module.exports = router;