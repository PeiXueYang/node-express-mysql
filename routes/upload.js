var express = require('express')
var router = express.Router();
const fs = require('fs')
var formidable = require('formidable')
const uploadImg = '/uploadImg/'
const domain = "http://localhost:3000";
// const txt = require('../utils/test.json')
// 图片上传 部分
router.post('/upload', function (req, res) {
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = 'public' + uploadImg; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
    form.parse(req, function (err, fields, files) {
        if (err) throw err
        var extName = ''; //后缀名
        let types = files.file.type
        switch (types) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
        }
        // console.log(res.locals, '图片路径.')
        if (extName.length == 0) {
            res.locals.error = '只支持png和jpg格式图片';
            res.send({
                msg: res.locals.error
            });
            return;
        }
        var imgName = Math.floor(Math.random() * 1000) + '.' + extName;
        //图片写入地址；
        var newPath = form.uploadDir + imgName;
        //显示地址；
        var url = domain + uploadImg + imgName;
        fs.renameSync(files.file.path, newPath); //重命名
        res.send({
            url,
            status: 0,
            msg: '图片上传成功.'
        });
    });
});



module.exports = router;