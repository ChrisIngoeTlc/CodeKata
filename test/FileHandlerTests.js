"use strict";

var expect = require('chai').expect,
    assert = require('chai').assert,
    fileHandler = require('../fileHandler');

describe('File Handling', function(){
    describe('open a file', function(){
        it('should return 0',function(){
            fileHandler.OpenFile('data/test.txt', function(result){
                assert.isTrue(result);
            });
        })
    })

    describe('read a file', function(){
        it('should return test data',function(){
            var result = fileHandler.ReadFile('data/test.txt', function(contents){
                assert.equal(contents,'test data');
            });
        })
    })

});
