var http = require("http");
var results = [];
counter = 2;
function PrintResult(){
    for(var i = 0;i<results.length;i++){
        console.log(results[i]);
    }
}


function doGet(i){

    var result = [];
    http.get(process.argv[i],function(response){
        response.on("data",function(data){
              result.push(data);
        });
        response.on("error",function(data){
           //console.log("ERROR");
        });
        response.on("end",function(){
            result = result.join("");
            results.push(result);
            counter++;
            if(i == 4){
                PrintResult();
            }
            else{
                doGet(counter);
            }
        });
    });
}


doGet(counter);