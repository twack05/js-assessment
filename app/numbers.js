if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var n = num.toString(2);
        var arr = n.split(' ');
        var newBit = arr.length - bit;
        var number = arr[newBit];
        var value = ParseInt(number, 10);
        return value;

    },

    base10: function(str) {

    },

    convertToBinary: function(num) {

    },

    multiply: function(a, b) {

    }
  };
});

