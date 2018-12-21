const http = require('http');

var data = require('./data.json');
// console.log(typeof data) //object类型
data = JSON.stringify(data); //因为下面的res.write(data)中data必须是字符串,所有要经过这步进行转换
// console.log(typeof data) //string类型

var server = http.createServer((req,res)=>{
	if (req.url !== "/favicon.ico") { //如果请求的是/favicon.ico图标，会默认请求两次
        console.log("有人访问...");

        // res.setHeader("Content-type", "text/plain;charset=utf-8");
		res.setHeader("Access-Control-Allow-Origin","*");
	    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
	    // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

		// res.write(data);
		// res.end(); // 1.这样写可以

		res.end(data); // 2.这样写也可以
    }

}).listen(3003,'127.0.0.1',()=>{
	console.log("Listening on port : 3003 ......")
}); // 1.这样写可以
// server.listen(3003,'localhost'); // 2.这样写也可以
// server.listen(3003,'127.0.0.1'); // 3.这样写也可以