
'use strict';

module.exports = {
  arrayAddOne: function( arr ) {
    const addOne = arr.map( function( element ) {
      return element + 1;
    } );
    const sum = addOne.reduce( function( a, b ) {
      return a + b;
    }, 0 );
    return sum;
  }
};
