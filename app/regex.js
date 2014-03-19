if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /[a-z][a-z]/.test(str);
    },

    endsWithVowel : function(str) {
        return /\Z[aeiou]/.test(str);
    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
