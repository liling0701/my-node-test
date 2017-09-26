//var http = require("http");
//
//http.createServer(function(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}).listen(8888);
//// 终端打印如下信息
//console.log('Server running at http://localhost:8888/');
var express=require('express');
var app=express.createServer();
app.use(express.bodyParser());
app.all("/",function(req,res){
  res.send(req.body)
})
app.listen(3000);