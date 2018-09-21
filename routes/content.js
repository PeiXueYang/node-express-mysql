var express = require('express')
var router = express.Router();
const mysql = require('mysql')
var db = require('../config/db');
var ss = require('../config/shuoshuo');
var connection = mysql.createConnection(db.mysql);
connection.connect();
//添加说说
router.post('/addshuoshuo', function (req, res) {
  let params = req.body
  const sql = ss.insert
  connection.query(sql, [params.content, params.author, params.timer], (err, result) => {
    if (err) throw err
    else {
      if (result) {
        res.send({
          status: 0,
          msg: '发表成功.'
        })
        res.end()

      } else {
        res.send({
          status: -1,
          msg: '发表失败.'
        })
        res.end()
      }
    }
  })
  return
});
// 说说列表
router.post('/getSSlist', (req, res) => {
  const sql = ss.query
  connection.query(sql, (err, result) => {
    if (err) throw err
    else {
      if (result.lenth != 0) {
        res.send({
          status: 0,
          msg: '查询成功.',
          result
        })
      } else {
        res.send({
          status: 1,
          msg: '暂无数据.'
        })
      }
      res.end()
    }
  })



})


module.exports = router;