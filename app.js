"use strict";
/*
//Calculations
var calcs = require('./Calculations');
var result = calcs.AddTwoNumbers(1,8);
console.info(result);
*/
/*
//FizzBuzz
var fizzbuzz = require('./fizzbuzz');
fizzbuzz.RunFizzBuzzRange(1,100);
*/

//Callbacks
var testCallBacks = require('./callbacks');
testCallBacks.AddTwoNumbers(1,2,displayResult);

function displayResult(err, result){
    console.info(result);
}

testCallBacks.AddTwoNumbersTheHardWay(3,2,displayResult);
