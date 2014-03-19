if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        // apply
        return fn.apply(null, arr);

    },

    speak : function(fn, obj) {
        // apply and call

    },

    functionFunction : function(str) {

        return function(str) {
            return str + ", " + str;
        };
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
        return a + b + c + d;

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
