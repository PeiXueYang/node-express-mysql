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
router.get('/main',(req,res)=>{
  res.render('main',{title:"main页"})
})
router.get('/photo',(req,res)=>{
  res.render('photo',{title:"main页"})
})
router.get('/shuoshuo',(req,res)=>{
  res.render('shuoshuo',{title:"main页"})
})
router.get('/mood',(req,res)=>{
  res.render('mood',{title:"main页"})
})
router.get('/addshuoshuo',(req,res)=>{
  res.render('addshuoshuo',{title:"addshuoshuo"})
})
router.get('/addmoods',(req,res)=>{
  res.render('addmoods',{title:"addmoods"})
})
module.exports = router;
