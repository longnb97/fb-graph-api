const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 7000;

const controller = require('./fb.controller')
const Facebook = require('./config');

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, (err)=> {
    if(err) console.log(err);
    else console.log(`Server listenning at ${PORT}`);
})

app.get('/', controller.welcome);


