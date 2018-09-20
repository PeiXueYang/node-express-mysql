var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/login',(req,res)=>{
  res.render('login',{title:"login 登录页"})
})
router.get('/reg',(req,res)=>{
  res.render('reg',{title:"reg 注册页"})
})
router.get('/add',(req,res)=>{
  res.render('add',{title:"add add页"})
})
router.get('/main',(req,res)=>{
  res.render('main',{title:"main页"})
})
router.get('/sanwen',(req,res)=>{
  res.render('sanwen',{title:"main页"})
})
router.get('/shuoshuo',(req,res)=>{
  res.render('shuoshuo',{title:"main页"})
})
router.get('/mood',(req,res)=>{
  res.render('mood',{title:"main页"})
})
module.exports = router;
