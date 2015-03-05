"use strict";

var fs = require("fs");

exports.OpenFile = function(filePath, callback){
    fs.open(filePath,'r',function(err, fd){
        if (err){
            return callback(false);
        }
        fs.close(fd, function(){
            return callback(true);
        })
    });
}

exports.ReadFile = function(filePath, callback){
    fs.readFile(filePath, function(err, data){
        if (err){
            return callback(null);
        }
        return callback(data);
    });
}