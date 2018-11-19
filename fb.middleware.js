module.exports = {
    welcome,
    api
}   

function welcome(req, res) {
    res.send('WELCOME !');
    console.log('WELCOME !');
}

function api(req, res){
    res.send('middleware');
    console.log('middleware');
}