module.exports = {
    welcome,
    api
}   

function welcome(req, res) {
    res.send('WELCOME !');
}

function api(req, res){
    res.send('middleware')
}