var express=require('express');
var bodyParser = require('body-parser');


var jsonParser=bodyParser.json();

var app=express();
app.use(jsonParser)
module.exports=app;
