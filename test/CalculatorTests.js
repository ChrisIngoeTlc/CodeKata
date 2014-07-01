"use strict";

var calcs = require('../Calculations'),
    expect = require('chai').expect,
    assert = require('chai').assert;

//use assert to run a test
describe('Calculations', function(){
    describe('add 1 plus 8', function(){
        it('should return 9',function(){
            var result = calcs.AddTwoNumbers(1,8);
            assert.equal(result,9);
        })
    })
});
