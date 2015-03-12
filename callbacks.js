"use strict";

//different approaches:
//1. Nested
//2. Use Async module
//3. Use promises
//4. Use generators (Node v11)

exports.AddTwoNumbers = function AddTwoNumbers(num1, num2, callback){
    callback(null, num1 + num2);
};

exports.AddTwoNumbersTheHardWay = function(num1, num2, callback){
    NumberAddition(num1,num2,function(err, result){
        NumberSubtract(result,num2,function(err,result){
            NumberAddition(result, num2, function(err,result){
                callback(null, result);
            })
        })
    })
}

exports.AddTwoNumbersTheHardWay2 = function(num1, num2, callback){
    Mathematics1(num1,num2,Mathematics2);

    function Mathematics1(err,data){
        NumberAddition(num1,num2,Mathematics2);
    }

    function Mathematics2(err,data){
        NumberSubtract(data,num2,Mathematics3);
    }

    function Mathematics3(err,data){
        NumberAddition(data,num2,function(err,data){
            callback(null, data);
        });
    }
}

function NumberAddition(num1, num2, callback){
    callback(null,num1 + num2);
}

function NumberSubtract(num1,num2,callback){
    callback(null,num1-num2);
}