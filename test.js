//function foo(x){
//    return x;
//}
//var toString=Object
////emitter.on()
//var select=function
//var Promise=function(){
//    EventEmitter.call(this);
//}
//util.inherits(Promise,EventEmitter);
//Promise.prototype.then=function(fullfillHandler,errorHandler,progressHandler){
//    if(typeof fullfillHandler=='function'){
//        this.once("suncess",fullfillHandler);
//    }
//    if(typeof errorHandler=='function'){
//        this.once('error',errorHandler);
//    }
//    if(typeof progressHandler=='function'){
//        this.once('progress',progressHandler);
//    }
//    return this;
//}
//
//var Deferred=function(){
//    this.state='unfulfiled';
//
//   this.promise=new Promise();
//}
//Deferred.prototype.resolve=function(obj){
//    this.state="fulfilled"
//}

//var Q=require("q");
//var Test={
//    fun1:function(data){
//        var deferred= Q.defer();
//        deferred.resolve(data);
//        return deferred.promise;
//    },fun2:function(data){
//        var deferred= Q.defer();
//        deferred.resolve(data+"fun2");
//        return deferred.promise;
//    },fun3:function(data){
//        var deferred= Q.defer();
//        deferred.resolve(data+"fun3");
//        return deferred.promise;
//    }
//}
//module.exports=Test;
//Test.fun1("12").then(Test.fun2).then(Test.fun3).done(function(data){
//    console.log(data);
//})

var fs = require("fs");
//fs.readFile("input.txt", "utf-8", function (err, data) {
//    console.log(data);
//})
//fs.readFile("input.txt", "utf-8", function (err, data) {
//    console.log(data);
//    fs.readFile("content.txt", "utf-8", function (err, data) {
//        console.log(data);
//    })
//})
var Q = require('q');
var defer = Q.defer();
///**
// * 获取初始promise
// * @private
// */
//function getInitialPromise() {
//    return defer.promise;
//}
/**
 * 为promise设置三种状态的回调函数
 */
//getInitialPromise().then(function (success) {
//    console.log(success);
//}, function (error) {
//    console.log(error);
//}, function (progress) {
//    console.log(progress);
//});

//defer.resolve('resolve');   //控制台打印resolve
//defer.notify('in progress');//控制台打印in progress
//defer.reject('reject');
//var outputPromise = getInitialPromise().then(
//    function (fulfilled) {
//       throw new Error("fulfilled")
//    }, function (rejected) {
//        throw new Error("rejected")
//    })
//
//
//outputPromise.then(
//    function (fulfilled) {
//    console.log("fulfilled: "+fulfilled)
//}, function (rejected) {
//        console.log("rejected: "+rejected)
//})
//defer.resolve();

//var outputPromise = getInitialPromise().then(
//    function (fulfilled) {
//        var myDefer= Q.defer();
//        fs.readFile("content.txt","utf-8",function(err,data){
//            if(!err&&data){
//                myDefer.resolve(data);
//            }
//        })
//       return myDefer.promise;
//    }, function (rejected) {
//        throw new Error("rejected")
//    })
//
//
//outputPromise.then(
//    function (fulfilled) {
//    console.log(fulfilled)
//}, function (rejected) {
//        console.log("rejected: "+rejected)
//})
//defer.resolve();

//var outputpromise=getInitialPromise().then(null,function(rejected){
//    return 'rejected'
//})
//
//outputpromise.then(function(fulfilled){
//    console.log("fulfilled"+fulfilled);
//},function(rejected){
//    console.log("rejected"+rejected);
//})
//
//defer.resolve("inp fulfilled")
//
//var outputpromise=getInitialPromise().fail(function(error){
//    console.log("fail:"+error);
//})
//defer.reject("jjj");
//

//
//var users=[{"name":"andrew",'passwd':"password"}];
//function getUsername(){
//    return defer.promise;
//}
//function getUser(username){
//    var user;
//    users.forEach(function(element){
//        if(element.name===username){
//            user=element;
//        }
//    })
//    return user;
//}
//getUsername().then(function(username){
//    return getUsername(username);
//}).then(function(user){
//    console.log(user);
//})
//
//defer.resolve("andrew")

//var funcs=[foo,bar,baz,qux]
//var result=Q(initialVal)
//funcs.forEach(function(funcs){
//    result=result.then(funcs);
//})
//return result;
//
//
//
//function foo(result){
//    console.log(result);
//    return result+result;
//}
//Q('hello').then(foo).then(foo).then(foo)
//function foo(result){
//    console.log(result);
//    return result+result;
//}
//var funcs=[foo,foo,foo];
//var result=Q("hello");
//funcs.forEach(function(func){
//    result=result.then(func);
//})
//funcs.reduce(function(prev,current){
//    return prev.then(current);
//},Q('HELLO'))

//function printFileContent(fileName) {
//    //Todo: 这段代码不够简洁。可以使用Q.denodeify来简化
//    var defer = Q.defer();
//    fs.readFile(fileName,'utf8',function(err,data){
//        if(!err && data) {
//            console.log(data);
//            defer.resolve(fileName + ' success ');
//        }else {
//            defer.reject(fileName + ' fail ');
//        }
//    })
//    return defer.promise;
//}
//Q.all([printFileContent('input.txt'),printFileContent('content.txt'),printFileContent('sample03.txt'),printFileContent('sample04.txt')])
//    .then(function(success){
//        console.log(success);
//    });
//
//Q.allSettled([printFileContent('nosuchfile.txt'),printFileContent('sample02.txt'),printFileContent('sample03.txt'),printFileContent('sample04.txt')])
//    .then(function(results){
//        results.forEach(
//            function(result) {
//                console.log(result.state);
//            }
//        );
//    });
//
//
//
///**
// *@private
// */
//function getPromise(msg,timeout,opt) {
//    var defer = Q.defer();
//    setTimeout(function(){
//        console.log(msg);
//        if(opt)
//            defer.reject(msg);
//        else
//            defer.resolve(msg);
//    },timeout);
//    return defer.promise;
//}

/**
 *没有用done()结束的promise链
 *由于getPromse('2',2000,'opt')返回rejected, getPromise('3',1000)就没有执行
 *然后这个异常并没有任何提醒，是一个潜在的bug
 */
//getPromise('1',3000)
//    .then(function(){return getPromise('2',2000,'opt')})
//    .then(function(){return getPromise('3',1000)});
///**
// *用done()结束的promise链
// *有异常抛出
// */
//getPromise('1',3000)
//    .then(function(){return getPromise('2',2000,'opt')})
//    .then(function(){return getPromise('3',1000)})
//    .done();


//
//function asycFunction(){
//    return new Promise(function(resolve,reject){
//        setTimeout(function(){
//            resolve("Async Hello World");
//        },10)
//    })
//}
//asycFunction().then(function(value){
//    console.log(value)
//}).catch(function(error){
//    console.log(error)
//})
//asycFunction().then(function(value){
//    console.log(value)
//},function(error){
//    console.log(error)
//})

//function taskA() {
//    console.log("Task A");
//    throw new Error("throw Error @ Task A")
//}
//function taskB() {
//    console.log("Task B");// 不会被调用
//}
//function onRejected(error) {
//    console.log(error);// => "throw Error @ Task A"
//}
//function finalTask() {
//    console.log("Final Task");
//}
//
//var promise = Promise.resolve();
//promise
//    .then(taskA)
//    .then(taskB)
//    .catch(onRejected)
//    .then(finalTask);


// `delay`毫秒后执行resolve
//function timerPromisefy(delay) {
//    return new Promise(function (resolve) {
//        setTimeout(function () {
//            resolve(delay);
//        }, delay);
//    });
//}
//var startDate = Date.now();
//// 所有promise变为resolve后程序退出
//Promise.all([
//    timerPromisefy(1),
//    timerPromisefy(32),
//    timerPromisefy(64),
//    timerPromisefy(128)
//]).then(function (values) {
//    console.log(Date.now() - startDate + 'ms');
//    // 約128ms
//    console.log(values);    // [1,32,64,128]
//});

var winnerPromise = new Promise(function (resolve) {
    setTimeout(function () {
        console.log('this is winner');
        resolve('this is winner');
    }, 4);
});
var loserPromise = new Promise(function (resolve) {
    setTimeout(function () {
        console.log('this is loser');
        resolve('this is loser');
    }, 1000);
});
// 第一个promise变为resolve后程序停止
Promise.race([winnerPromise, loserPromise]).then(function (value) {
    console.log(value);    // => 'this is winner'
});