var express = require('express');
var router = express.Router();
var Category = require('../entity/category');

var Sequelize = require('sequelize');


var Op = Sequelize.Op;
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/getAllCategories',function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    Category.findAll({
        where:{
            [Op.and]: [
                {
                    level:3,
                },
                {
                    del_flag:0,
                }
            ]
        },
        order:['sort']
    }).then((categories) => {
        console.log(categories);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(categories));
    }).catch((err) => {
        console.log('error:',err);
    })
});

module.exports = router;
