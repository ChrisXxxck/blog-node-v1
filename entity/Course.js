var sequelize = require('../connect/mysql');
var Sequelize = require('sequelize');

var Course = sequelize.define('course',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING
    },
    url:{
        type:Sequelize.STRING
    },
    img:{
        type:Sequelize.STRING
    },
    description:{
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

module.exports = Course;