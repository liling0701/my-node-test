//var fs=require("fs");
//var data=fs.readFileSync('input.txt');
//
//console.log(data.toString());
//console.log("程序执行结束");

//var fs=require("fs");
//fs.readFile('input.txt',function(err,data){
//    if(err) return console.error(err);
//    console.log(data.toString());
//
//})
//console.log("程序执行结束");
//var events=require("events");
//var eventEmitter=new events.EventEmitter();
//
//var connecthandler=function connected(){
//    console.log("连接成功");
//    eventEmitter.emit('data_received');
//
//}
//eventEmitter.on('connection',connecthandler);
//eventEmitter.on('data_received',function(){
//    console.log("数据接收成功");
//});
//eventEmitter.emit('connection');
//
//console.log("程序执行完毕");

//var events=require("events");
//var emitter=new events.EventEmitter();
//emitter.emit("error")
//var listener1=function(arg1,arg2){
//    console.log("listener1",arg1,arg2);
//}
//var listener2=function(arg1,arg2){
//    console.log("listener2",arg1,arg2);
//}
////emitter.on("someEvent",listener1)
////emitter.on("someEvent",listener2)
//
//emitter.once("someEvent",listener2);
//emitter.removeAllListeners("someEvent",listener2);
//
//emitter.once("someEvent",listener1);
//
//emitter.emit("someEvent",1,2)

var fs=require('fs')
//fs.readFile('content.txt','UTF-8',function(err,data){
//    if(err){
//        cosole.error(err)
//    }else{
//        console.log(data)
//    }
//})
//
//fs.open('content.txt',"r",function(err,fd){
//    if(err){
//        console.err(err);
//        return;
//    }
//    var buf=new Buffer(8);
//    fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
//        if(err){
//            console.err(err);
//            return;
//        }
//        console.log('bytesread:'+bytesRead)
//        console.log(buffer)
//
//
//    })
//
//
//
//
//})




//
//var http=require('http');
//var url=require('url');
//var util=require('util');
//http.createServer(function(req,res){
//    res.writeHead(200,{"Content-Type":"text/plain"})
//    res.end(util.inspect(url.parse(req.url,true)));
//}).listen(3000)


//function fn(arg1,arg2,callback){
//    var num=Math.ceil(Math.random()*(arg2-arg1));
//    callback(num);
//
//}
//fn(10,20,function(num){
//    console.log("Callback called "+num);
//})
//
//function foo( callback){
//    var a=10;
//    callback(a)
//};
//
//var f=foo(function(a){
//    a*=2;
//    return a;
//});
//f();
//f();
//
//function  say(value){
//    console.log(value);
//    return value;
//}
//function execute(callback,value){
//    value =value+"ssss";
//    callback(value);
//}
//
////console.log(say);
////console.log(say('hi is.'))
////execute(say,"hi is");
//
//execute(function(){
//
//})
//
function a(){

}



