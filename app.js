const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 7000;

const facebookMiddleware = require('./fb.middleware')
const facebook = require('./config');

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, (err)=> {
    if(err) console.log(err);
    else console.log(`Server listenning at ${PORT}`);
})

app.get('/', facebookMiddleware.welcome);
app.get('/api', facebookMiddleware.api)


