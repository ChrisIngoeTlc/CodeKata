"use strict"

var assert = require("assert");
var fb = require("../fizzbuzz");

describe('FizzBuzz', function(){
    describe('Test number 1', function(){
        it('should return 1', function(){
            var result = fb.GetFizzBuzz(1);
            assert.equal(result,'1')
        });
    })
    describe('Test number 3', function(){
        it('should return fizz', function(){
            var result = fb.GetFizzBuzz(3);
            assert.equal(result,'fizz');
        });
    })
    describe('Test number 5', function(){
        it('should return fizz', function(){
            var result = fb.GetFizzBuzz(5);
            assert.equal(result,'buzz');
        });
    })
    describe('Test number 15', function(){
        it('should return fizz', function(){
            var result = fb.GetFizzBuzz(15);
            assert.equal(result,'fizzbuzz');
        });
    })
});