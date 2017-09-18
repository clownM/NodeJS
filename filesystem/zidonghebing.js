/**
 * 自动合并
 */

var fs = require("fs");

var filedir = "../autoProject/source";

fs.watch(filedir , function(ev , file){
    //console.log(ev + file);
    
    fs.readdir(filedir ,function(err,datalist){
        var arr = [];
        datalist.forEach(function(f){
            if(f){
                var info = fs.statSync(filedir + "/" + f);
                
                if(info.mode == 33206){
                    arr.push(filedir + "/" + f);
                }
            }      
        });
        var content = "";
        arr.forEach(function(f){
            var c = fs.readFileSync(f);
            content += c.toString() + '\n';
        });
        //console.log(content);
        fs.writeFileSync("../autoProject/js/index.js",content);

    });

});