
var fs = require("fs");
fs.open("1.txt","r",function(err,fd){
    if(err){
        console.log("文件打开失败！");
    }else{
        /**
         * fs.read(fd,buffer,offset,length,position,callback);
         * fd: 通过open方法成功打开一个文件返回的编号，即.open()方法回调函数的fd
         * buffer: buffer对象
         * offset:新的内容添加到buffer中的起始位置
         * length:添加到buffer中内容的长度
         * position:读取文件中的起始位置
         * callback:回调函数
         */
        var bf = new Buffer(10);
        fs.read( fd, bf, 0, 4,null,function(err2,){

            console.log(bf);
        });
    }
  
});