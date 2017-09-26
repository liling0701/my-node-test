var http=require("http");
var querystring=require("querystring");
var contents=querystring.stringify({
    token:"111",
    orgid:"7651233",
    operatorid:'12'
})
var options={
    host:"admin.ihr.zhaopin.com",
    path:"/api/cmpoutblack.do",
    mothod:"post",
    header:{
        'Content-Type':"application/x-www-form-urlencoded",
        'Content-Length':contents.length
    }

}

var req=http.request(options,function(res){
    res.setEncoding("utf8");
    res.on('data',function(data){
        console.log(data);
    })

})
req.write(contents);
req.end();