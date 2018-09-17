let counter = 0
var user = {
	insert:'insert into user(id, name, phone,email,password) VALUES('+ `${counter++}` +',?,?,?,?)',
	getUserByPhone:'select * from user where phone = ?',
	query:'select * from user where phone = ? ',
	queryPwd:'select * from user where password = ?'
};
module.exports = user;