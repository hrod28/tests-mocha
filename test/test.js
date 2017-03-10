'use strict';
var chai = require('chai');
var assert = chai.assert;
var app = require('../main.js');
var arrayAddOne = app.arrayAddOne;

describe('arrayAddOne', function() {
  it('should find the sum of an array after adding 1 to each element', function() {
    var arr = [ 1, 2, 3, 4 ];
    assert.equal(arrayAddOne(arr), 14);
  });
});
