const axios = require('axios');

const facebookConfig = require('../config')

function getUserInfo(req, res) {
    axios.get(`https://graph.facebook.com/v2.5/me?fields=id,name,birthday,gender,email&access_token=${facebookConfig.ACCESS_TOKEN}`)
        .then(data => console.log(data.data))
        .catch(err => console.log(err))
}

function checkIn(req, res, next) {
    console.log('middleware');
    next();
}

module.exports = {
    getUserInfo,
    checkIn
}