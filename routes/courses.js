var express = require('express');
var router = express.Router();
var Course = require('../entity/Course');

var Sequelize = require('sequelize');


var Op = Sequelize.Op;
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/getAllCourses',function (req, res, next) {
    Course.findAll({
        where:{
            del_flag:0,
        },
        order:['sort']
    }).then((courses) => {
        console.log(courses);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(courses));
    }).catch((err) => {
        console.log('error:',err);
    })
});

module.exports = router;
