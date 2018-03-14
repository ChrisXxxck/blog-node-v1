var express = require('express');
var connection = require('../connect/mysql');
var router = express.Router();

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getCategoryList',function (req, res, next) {
    connection.query('select * from category',function (err, rows, fields) {
        console.log(rows[0]);
        // console.log(fields);
        var categoryList = new Array();
        for (let i=0;i<rows.length;i++){
          let item = {
            name:'',
            list:[]
          };
          if (rows[i].parent_id === 0 && rows[i].del_flag === 0){
            item.name = rows[i].name;
            for (let j=0;j<rows.length;j++){
              if(rows[j].parent_id === rows[i].id && rows[j].del_flag === 0){
                let subItem = {
                    name:'',
                    url:''
                };
                subItem.name = rows[j].name;
                subItem.url = rows[j].url;
                console.log(subItem);

                item.list.push(subItem);
              }
            }
            categoryList.push(item);
          }
        }
        console.log(categoryList[0].list[0].name);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(categoryList));
    })
})


module.exports = router;
