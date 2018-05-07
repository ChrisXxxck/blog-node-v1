var express = require('express');
var router = express.Router();
var User = require('../entity/user');

var Sequelize = require('sequelize');


var Op = Sequelize.Op;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    User.findAll({
        where:{
            [Op.and]: [
                {
                    username:username,
                },
                {
                    del_flag:0,
                }
            ]
        },
        order:['sort']
    }).then((users) => {
        console.log(users);
        var result = {};
        if (users.length == 0){
            result.isLogined = false;
            result.errMsg = '用户不存在!'
        }else if (users.length == 1){
          if(users[0].password == password){
            result.isLogined = true;
            result.user = users[0];
          }else {
              result.isLogined = false;
              result.errMsg = '密码错误!';
          }
        }else {
            result.isLogined = false;
            result.errMsg = '系统错误!';
        }
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(result));
    }).catch((err) => {
        console.log('error:',err);
    })
});

module.exports = router;
