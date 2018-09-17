var express = require('express')
var router = express.Router();
const mysql = require('mysql')
var db = require('../config/db');
var user = require('../config/user');
var connection = mysql.createConnection(db.mysql);
connection.connect();
//注册
router.post('/reg', function (req, res) {
  let params = req.body
  connection.query(user.getUserByPhone, params.phone, (err, result) => {
    if (err) throw err
    else {
      //从数据库 查询 手机号 有没有注册
      if (result.length != 0) {
        res.send({
          status: 5,
          msg: '该手机号已经被注册'
        })
        res.end()
      } else if (result.length == 0) {
        var sql = user.insert;
        let userInfo = [params.name, params.phone, params.email, params.password];
        connection.query(sql, userInfo, (err, result) => {
          if (err) throw err
          else {
            res.send({
              params,
              status: 0,
              message: '恭喜,注册成功.',
              result
            });
            res.end();
          }
        })
      }

    }
  })
  return
});
//登录
router.post('/login', (req, res) => {
  let params = req.body
  connection.query(user.query, params.phone, (err, result) => {
    if (err) throw err
    else {
      if (result.length == 0) {
        res.send({
          status: 1,
          msg: '该手机号尚未注册.'
        })
        res.end()
      } else {
        let response = result[0]
        if (response.phone == params.phone && response.password == params.password) {
          res.send({
            status: 0,
            msg: '恭喜,登录成功.'
          })
          res.end()
        } else {
          res.send({
            status: 2,
            msg: '手机号或者密码有误.'
          })
          res.end()
        }
      }
    }

  })

})

module.exports = router;