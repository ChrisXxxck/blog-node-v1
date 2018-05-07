var express = require('express');
var Sequelize = require('sequelize');

var Category = require('../entity/category');
var Article = require('../entity/article');

var router = express.Router();

var Op = Sequelize.Op;

router.get('/getCategoriesByParentId',function (req, res, next) {
    console.log(req.query.id);
    let parentId = req.query.id;
    Category.findAll({
        where:{
            [Op.and]: [
                {
                    del_flag: 0,
                },
                {
                   parent_id:parentId
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

router.post('/getArticlesByCategory',function (req, res, next) {
    console.log(req);
    let categoryId = req.body.id;
    let type = req.body.type;
    Article.findAll({
        where:{
            [Op.and]: [
                {
                    belong_to:categoryId ,
                },
                {
                    type:type,
                }
            ]
        },
        order:['sort']
    }).then((articles) => {
        console.log(articles);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(articles));
    }).catch((err) => {
        console.log('error:',err);
    })
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
    // res.end(JSON.stringify('hello'));
});

router.get('/getArticleById',function (req, res, next) {
    console.log(req.query.id);
    let id = req.query.id;
    Article.findAll({
        where: {
            id: id
        },
        order:['sort']
    }).then((articles) => {
        console.log(articles);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(articles));
    }).catch((err) => {
        console.log('error:',err);
    })

});

//获取所有已经发布的文章
router.get('/getAllArticles',function (req, res, next) {
    Article.findAll({
        where: {
            del_flag: 0
        },
        order:['sort']
    }).then((articles) => {
        console.log(articles);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(articles));
    }).catch((err) => {
        console.log('error:',err);
    })

});

//获取在草稿箱中的文章
router.get('/getSavedArticles',function (req, res, next) {
    Article.findAll({
        where: {
            del_flag: 2
        },
        order:['sort']
    }).then((articles) => {
        console.log(articles);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(articles));
    }).catch((err) => {
        console.log('error:',err);
    })

});

//获取回收站的文章
router.get('/getDeletedArticles',function (req, res, next) {
    Article.findAll({
        where: {
            del_flag: 1
        },
        order:['sort']
    }).then((articles) => {
        console.log(articles);
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        res.end(JSON.stringify(articles));
    }).catch((err) => {
        console.log('error:',err);
    })

});

router.post('/publishArticle',function (req, res, next) {
    console.log(req.body)
    let article = JSON.parse(req.body.article);
    console.log(article);
    let result = {};
    if (article.operation == 'publish'){//如果是发布操作
        if(article.id == undefined || article.id == '' || article.id == null){
            Article.build({ title: article.title,abstract:article.abstract,type:article.type,belong_to:article.category,content:article.content,author:'徐晨坤',create_time:new Date(),update_time:new Date(),del_flag:0})
                .save()
                .then(anotherTask => {
                    result.success = true;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                    res.end(JSON.stringify(result));
                })
                .catch(error => {
                    result.success = false;
                    result.errMsg = error;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                    res.end(JSON.stringify(result));
                });
        }else {
            Article.update({ title: article.title,abstract:article.abstract,type:article.type,belong_to:article.category,content:article.content,author:'徐晨坤',update_time:new Date(),del_flag:0}
            , {
                where: {
                    id: article.id//查询条件
                }
            }).then(anotherTask => {
                result.success = true;
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                res.end(JSON.stringify(result));
            }).catch(error => {
                    result.success = false;
                    result.errMsg = error;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                    res.end(JSON.stringify(result));
            });
        }
    }else {//如果是保存操作
        if(article.id == undefined || article.id == '' || article.id == null){
            Article.build({ title: article.title,abstract:article.abstract,type:article.type,belong_to:article.category,content:article.content,author:'徐晨坤',create_time:new Date(),update_time:new Date(),del_flag:2})
                .save()
                .then(anotherTask => {
                    result.success = true;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                    res.end(JSON.stringify(result));
                })
                .catch(error => {
                    result.success = false;
                    result.errMsg = error;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                    res.end(JSON.stringify(result));
                });
        }else {
            Article.update({ title: article.title,abstract:article.abstract,type:article.type,belong_to:article.category,content:article.content,author:'徐晨坤',create_time:new Date(),del_flag:2}
                , {
                    where: {
                        id: article.id//查询条件
                    }
                })
                .then(anotherTask => {
                    result.success = true;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                    res.end(JSON.stringify(result));
                })
                .catch(error => {
                    result.success = false;
                    result.errMsg = error;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
                    res.end(JSON.stringify(result));
                });
        }
    }

});

module.exports = router;