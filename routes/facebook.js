const express = require('express');
const router = express.Router();

const facebookHelper = require('../middlewares/facebook');

// router.use('/', facebookHelper.checkIn);
router.get('/userInfo', facebookHelper.getUserInfo, (req, res) => res.send('info logged'));
router.get('/getThings', facebookHelper.getThings, (req, res) => res.send('photos logged'));

module.exports = router;
