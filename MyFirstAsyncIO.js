var fs = require("fs");
var lines;
function ReadFiles(callback){
    fs.readFile(process.argv[2],function doneReading(err,fileContents){
        fileContents = fileContents.toString().split('\n');

        lines = fileContents.length-1;
        callback();
    });
}
function PrintResult(){
    console.log(lines);
}

ReadFiles(PrintResult);