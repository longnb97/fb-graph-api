const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5050;

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('./views'));

app.listen(PORT, (err)=> {
    if(err) console.log(err);
    else console.log(`Server listenning at ${PORT}`);
})

app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    res.send('./views/index')
    console.log('homepage');
});




