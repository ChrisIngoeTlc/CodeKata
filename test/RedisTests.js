"use strict";

var expect = require('chai').expect,
    assert = require('chai').assert,
    redis = require('../redisHandler');

describe('Redis Handling', function(){
    describe('save a value', function(){
        it('should return no error',function(){
            redis.Save('key', 'value', function(err){
                assert.isNull(err);
            });
        })
    })

    describe('get a value', function(){
        it('should return a value',function(){
            var result = redis.Get('key', function(err, value){
                assert.isNull(err);
                assert.equal(value,'some data');
            });
        })
    })

});
