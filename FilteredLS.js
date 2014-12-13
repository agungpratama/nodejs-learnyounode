
var fs = require('fs');
var path = require('path');
var listResult = [];

function ReadDir(callback){
    fs.readdir(process.argv[2],function afterReadDir(err,list){
        for(var i=0;i<list.length;i++){
              if(path.extname(list[i])== "."+ process.argv[3])
                listResult.push(list[i]);
        }

        callback();
    })
}

function PrintResult(){
    for(var i = 0 ;i<listResult.length;i++){
        console.log(listResult[i]);
    }
}

ReadDir(PrintResult);
