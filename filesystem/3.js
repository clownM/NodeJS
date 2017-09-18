/**
 * 
 * 
 */

 var fs = require("fs");
 var filename = "3.txt";

 /* fs.writeFile(filename,"你好啊",function(){
     console.log(arguments);
 }); */

/*  fs.appendFile(filename,"__hello woeld!",function(){
     console.log(arguments);
 }); */

 fs.exists(filename,function(isExists){
    if(isExists){
        console.log("该文件已存在！");
    }else{

    }
 });