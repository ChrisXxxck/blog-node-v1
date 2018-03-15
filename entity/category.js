var sequelize = require('../connect/mysql');
var Sequelize = require('sequelize');

var Category = sequelize.define('category',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    parent_id:{
        type:Sequelize.INTEGER,
    },
    name:{
        type:Sequelize.STRING
    },
    url:{
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
    level:{
        type:Sequelize.INTEGER
    }

}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Category;