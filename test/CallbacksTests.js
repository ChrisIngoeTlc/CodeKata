"use strict";

var testCallBacks = require("../callbacks"),
    assert = require("assert");

describe('callbacks',function(){
    describe('AddTwoNumbers 1 and 9',function(){
        it('should return 10', function(){
            testCallBacks.AddTwoNumbers(1,9,function(result){
                assert.equal(result,10);
            })
        })
    })
});