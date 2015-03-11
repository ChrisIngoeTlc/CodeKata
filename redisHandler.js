"use strict";

exports.Save = function(key, value, callback){
    return callback(null)
}

exports.Get = function(key, callback){
    return callback(null, 'some data');
}