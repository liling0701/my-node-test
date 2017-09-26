
;(function(name,definition){
    var hasDefine=typeof define=='function',
        hasExports=typeof module!=='undefined' && module.exports;
    console.log(hasDefine);
    console.log(hasExports);

    if(hasDefine){
        define(definition)
    }else if(hasExports){
        module.exports=definition();
    }else{
        this[name]=function(){};
    }
})('hello',function(){
    var hello=function(){

    }
    return hello;
});
