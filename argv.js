//console.log(process.argv);
//process.stdin.resume();
//process.stdout.on("data",function(data){
//    process.stdout.write("read from console: "+data.toString());
//})
//function dosomething(args,callback){
//    somethingComplicated(args);
//    process.nextTick(callback);
//}
//dosomething(function onEnd(){
//    compute();
//})
var util=require('util');
//function Base(){
//    this.name="base";
//    this.base=1991;
//    this.sayHello=function(){
//        console.log("Hello"+this.name);
//    };
//}
//Base.prototype.showName=function(){
//    console.log(this.name);
//};
//function Sub(){
//    this.name="sub";
//}
//util.inherits(Sub,Base);
//var objBase=new Base();
//objBase.showName();
//objBase.sayHello();
//console.log(objBase);
//var objSub=new Sub();
//objSub.showName();
//console.log(objSub);
//function Person(){
//    this.name="byvoid";
//    this.toString=function(){
//        return this.name;
//    }
//}
//var obj=new Person();
//console.log(util.inspect(obj));
//console.log(util.inspect(obj,true));