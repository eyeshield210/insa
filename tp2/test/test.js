var assert = require('assert');
var pair = require('../js/pair');
var bonjour = require('../js/bonjour');

describe('Nombre pair', function() {
    describe('#Pair Number', function() {
        it('should return true when the number is pair', function() {
            assert.equal(pair(2),true);
        });
    });
    describe('#Odd Number', function() {
        it('should return false when the number is odd', function() {
            assert.equal(pair(3),false);
        });
    });
    describe('#Send a string', function() {
        it('should raise an exception when a string is tested', function() {
            assert.throws(() => pair("abc"),Error,"You must enter an integer number");
        });
    });
    describe('#Send a float', function() {
        it('should raise an exception when a float is entered', function() {
            assert.throws(() => pair(8.2),Error,"You must enter an integer number");
        });
    });
    describe('#Send a boolean', function() {
        it('should raise an exception when a boolean is entered', function() {
            assert.throws(() => pair(false),Error,"You must enter an integer number");
        });
    });
    describe('#Send a negative odd number', function() {
        it('should return false', function() {
            assert.equal(pair(-3),false);
        });
    });
    describe('#Send a negative pair number', function() {
        it('should return true', function() {
            assert.equal(pair(-4),true);
        });
    });
});

describe('Bonjour + Message', function() {
    describe('#Say hello to me', function() {
        it('should return bonjour seb', function() {
            assert.equal(bonjour("seb"),"Bonjour seb");
        });
    });
});