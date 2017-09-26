exports.add=function(){
    var sum= 0,
    i=0,args=arguments,
        I=args.length;
    while(i<I){
        sum+=args[i++];
    }
    return sum;
}

