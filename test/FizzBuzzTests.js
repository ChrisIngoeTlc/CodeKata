"use strict"

var assert = require("assert");
var fb = require("../fizzbuzz");

describe('FizzBuzz', function(){
    describe('Test non fizz or buzz', function(){
        it('should return 1', function(){
            var result = fb.GetFizzBuzz(1);
            assert.equal(result,'1')
        });
    })
    describe('Test fizz', function(){
        it('should return fizz', function(){
            var result = fb.GetFizzBuzz(3);
            assert.equal(result,'fizz');
        });
    })
    describe('Test buzz', function(){
        it('should return buzz', function(){
            var result = fb.GetFizzBuzz(5);
            assert.equal(result,'buzz');
        });
    })
    describe('Test number fizzbuzz', function(){
        it('should return fizzbuzz', function(){
            var result = fb.GetFizzBuzz(15);
            assert.equal(result,'fizzbuzz');
        });
    })
});