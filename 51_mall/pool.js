const mysql=require('mysql')
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'rooter',
	password:'123456',
	database:'51shop',
	connectionLimit:20
})
module.exports=pool;
