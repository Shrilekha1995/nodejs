var mysql = require('mysql')
var config = require('./config')
module.exports = mysql.createConnection(config)