var sequelize = require('../connect/mysql');
var Sequelize = require('sequelize');

var User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    account:{
        type:Sequelize.STRING
    },
    create_time:{
        type:Sequelize.DATE
    },
    update_time:{
        type:Sequelize.DATE
    },
    del_flag:{
        type:Sequelize.INTEGER
    },
    sort:{
        type:Sequelize.INTEGER
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = User;