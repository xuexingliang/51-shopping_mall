const express=require('express');
const pool=require('../pool.js');
//创建空的路由器对象
var router=express.Router();
//添加路由
//1.检索用户
//用户登录
router.post('/login',(req,res)=>{
	//获取post请求的数据
	var obj=req.body;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	//验证数据是否为空
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if(!$upwd){//设置$upwd为空时会出错，!$upwd不会出错
		res.send({code:402,msg:'upwd required'});
		return;
	}
	//执行sql语句，以用户名和密码为条件查询数据，查看结果
	pool.query('select uname upwd  from xz_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send({code:200,msg:'reg suc'})
		}else{
			res.send({code:301,msg:'login err'})
		}
	});
});

module.exports=router;//导出路由器