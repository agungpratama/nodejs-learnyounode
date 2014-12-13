var fs = require('fs');
var path = require('path');

module.exports = function(dirname, filter, callback) {
    var listResult = [];

    fs.readdir(dirname, function (err, list) {

        if (err) {
            return callback(err);
        }
        else{
            for(var i=0;i<list.length;i++){
                if(path.extname(list[i])== "."+ filter)
                    listResult.push(list[i]);
            }
        }

        return callback(null, listResult);

    })

};