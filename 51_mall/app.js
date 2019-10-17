const express=require('express');//引入express模块
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');//引入用户路由器
var server=express();//创建服务器
server.listen(8020);//监听端口
server.use(express.static('public'));//托管静态资源到public
server.use(express.static('myPro'));
//配置中间件
server.use(bodyParser.urlencoded({
	extended:false
}));
//使用路由器管理路由
//把用户路由器挂载到/user下，访问形式/user/detail;
server.use('/user',userRouter);

