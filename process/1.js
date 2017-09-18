 
/*
process 是一个全局对象
*/

//console.log( process );

/* console.log( process.pid );
console.log(process.platform);

setTimeout(function(){
    process.exit();
},5000); */

// process.stdout.write("hello world!");

/* function shuchu(data){
    process.stdout.write(data);
}
shuchu("你好啊！"); */

process.stdin.resume();
var a;
var b;
process.stdout.write("请输入a的值：");

process.stdin.on("data",function(text){
    if(!a){
        a = Number(text) ;
        process.stdout.write("请输入b的值：");
    }else{
        b = Number(text);
        process.stdout.write("a+b="+(a+b));
    }
});