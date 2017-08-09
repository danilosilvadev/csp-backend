var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sendEmail = require('./send-email');
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(sendEmail);
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(7000, function () {
  console.log('Example app listening on port 7000!');
});

