var http = require("http");
var results = [];


http.get(process.argv[2],function(response){
    response.setEncoding("UTF-8");
    response.on("data",function(data){
        results.push(data);
    });
    response.on("data",function(){
        //console.log("ERROR");
    });
    response.on("end",function(){
       console.log(results.join("").length);
       console.log(results.join(""));
    })
});