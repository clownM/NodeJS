var projectData = {
    "name":"autoProject",
    "fileData":[
        {
            "name":"css",
            "type":"dir"
        },{
            "name":"js",
            "type":"dir"
        },{
            "name":"image",
            "type":"dir"
        },{
            "name":"index.html",
            "type":"file",
            "content":"<html>\n\t<head>\n\t\t<title>前端项目自动化</title>\n\t</head>\n\t<body>\n\t\t<h1>hello world!</h1>\n\t</body>\n</html>"
        }
    ]
}
    
var fs = require("fs");

if(projectData.name){
   fs.mkdirSync(projectData.name);
    var fileData = projectData.fileData;
    if(fileData && fileData.forEach){
        fileData.forEach(function(f){
            /* console.log(f.type); */
            f.path = projectData.name+"/"+f.name;
            f.content = f.content || '';
            console.log(f.path); 
           switch(f.type){
                case "dir":
                    fs.mkdirSync(f.path);
                    break;
                case "file": 
                    fs.writeFileSync(f.path,f.content);
                    break;
                default:
                    break;
            }
        })
    }
}