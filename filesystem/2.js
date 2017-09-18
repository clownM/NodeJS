/**
 *  fs.write(fd,buffer,offset,length,[position],callback);
 */

 var fs = require("fs");

 fs.open("2.txt","r+",function(err,fd){

    if(err){
        console.log("文件打开失败！");
    }else{
        var bf = new Buffer("填入的信息");
            fs.write(fd,bf,0,15,10,function(){
        });

    }
 });