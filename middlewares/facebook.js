const axios = require('axios');

module.exports = {
    getUserInfo,
    checkIn
}

function getUserInfo(req, res) {
    axios.get('https://graph.facebook.com/v3.2/me?fields=id,name')
        .then(data => console.log('0'))
        .catch(err => console.log(err))
}

function checkIn(req, res, next) {
    console.log('middleware');
    next();
}