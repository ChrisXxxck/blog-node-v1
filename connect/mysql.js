var mysql = require('mysql');
var Sequelize = require('sequelize');
//
// const config = ({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'xck123',
//     database : 'blog',
//     port : 3306
// });
var sequelize = new Sequelize('blog','root','xck123',{
    host:'localhost',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

module.exports = sequelize;