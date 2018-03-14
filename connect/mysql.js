var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'xck123',
    database : 'blog',
    port : 3306
});

module.exports = connection;