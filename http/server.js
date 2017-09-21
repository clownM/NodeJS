/**
 * url处理
 */

var http = require("http");
var server = http.createServer();
var url = require("url");

server.on("request",function(req,res){
    //req.url  访问路径
    //后面的部分 query string
    console.log(req.url);
    var urlStr = url.parse(req.url);
    console.log(urlStr);
    
})

server.listen(8080,"localhost");