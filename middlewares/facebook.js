const axios = require('axios');

const facebookConfig = require('../config')

const facebookApi = `https://graph.facebook.com/v3.2`;
const accessToken = `access_token=${facebookConfig.ACCESS_TOKEN}`;
const facebookId = '2160780914184653'

function getUserInfo(req, res, next) {
    axios.get(`${facebookApi}/${facebookId }?fields=id,name,birthday,gender,email&${accessToken}`)
        .then(data => console.log(data.data))
        .catch(err => console.log(err))
    next();
}
//THAM SO DAU LA ? CAC THAM SO SAU LA &
// EAAIT0HzWdfUBAPumviwWV2MxX4KCNeQQEo4qcdw3aeuv50u25LxRLe2dvZBlqG9OZAkDEfRPAD8uku079W0EudeV7i3rLooLVLKVjnjtVwG4N8hk5UxS0UVFUlOa16GNCPen3ZCkCdZCOsObxbodnp1gf6DOeVgV5erAQOGaa1VrZCCx8Jjnhld7wDmpgsvpcIof6X8FKlQZDZD

function getThings(req, res, next){
    axios.get(`${facebookApi}/${facebookId}/feed?${accessToken}`)
    .then(data => console.log(data.data))
    .catch(err => console.log(err))
next()
}

function checkIn(req, res, next) {
    console.log('middleware');
    next();
}

module.exports = {
    getUserInfo,
    checkIn,
    getThings
}

