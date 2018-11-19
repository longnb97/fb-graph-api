const express = require('express');
const router = express.Router();

const facebookHelper = require('../middlewares/facebook');

router.use('/', facebookHelper.checkIn);
router.get('/', facebookHelper.getUserInfo);

module.exports = router;
