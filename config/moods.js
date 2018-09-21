let counter = 0
var moods = {
	insert:'insert into moods(mid,header,content,author,date) VALUES('+ `${counter++}` +',?,?,?,?)',
	query:'select * from moods'
};
module.exports = moods;