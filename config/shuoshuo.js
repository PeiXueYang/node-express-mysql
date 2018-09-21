let counter = 0
var shuoshuo = {
	insert:'insert into shuoshuo(sid, content,author,date) VALUES('+ `${counter++}` +',?,?,?)',
	query:'select * from shuoshuo'
};
module.exports = shuoshuo;