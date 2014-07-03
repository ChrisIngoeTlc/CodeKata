"use strict"

exports.GetFizzBuzz = GetFizzBuzz;

function GetFizzBuzz(number){

    //Have to check fizzbuzz combination first
    if (IsFizz(number) && IsBuzz(number)){
        return 'fizzbuzz';
    }

    //Check if number is fizz
    if (IsFizz(number)){
        return 'fizz';
    }

    //Check if number is buzz
    if (IsBuzz(number)){
        return 'buzz';
    }

    //Just return the number
    return number;

}

exports.RunFizzBuzzRange = function RunFizzBuzzRange(startNum, endNum){
    for(var i = startNum; i <= endNum; i++){
        console.log(GetFizzBuzz(i));
    }
}

//Is the number divisible by 3 = fizz
function IsFizz(number){
    if (number % 3 == 0 ){
        return true;
    }
}

//Is the number divisible by 5 = buzz
function IsBuzz(number){
    if (number % 5 == 0 ){
        return true;
    }
}