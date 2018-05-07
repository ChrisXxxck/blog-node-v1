var sequelize = require('../connect/mysql');
var Sequelize = require('sequelize');

var Article = sequelize.define('article',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement : true,
    },
    type:{
        type:Sequelize.INTEGER,
    },
    belong_to:{
        type:Sequelize.INTEGER
    },
    title:{
        type:Sequelize.STRING
    },
    abstract:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.BLOB
    },
    author:{
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

module.exports = Article;