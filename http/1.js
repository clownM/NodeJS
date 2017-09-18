/**
 * 
 * 
 */

 var http = require("http");
 var server = http.createServer();
 server.on("error",function(error){
     console.log(error);
 })
 server.on("listening",function(){
     console.log("listening······");
 });
 server.on("request",function(){
     console.log("get it!");
 })
 server.listen(8080,"localhost");
 