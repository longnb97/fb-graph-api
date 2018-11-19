const express = require('express');
const router = express.Router();

router.use('/fb', require('./facebook'));


module.exports = router;