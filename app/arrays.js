if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (i = 0; i < arr.length; i ++) {
            sum += arr[i];
        };
        return sum;
    },

    remove : function(arr, item) {
        var results = [];
        var index;
        while (( index = arr.indexOf(item)) != -1){
            results.push(index + results.length);
            arr.splice(index, 1);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var arr2 = arr;
        var results = [];
        var index;
        while (( index = arr2.indexOf(item)) != -1){
            results.push(index + results.length);
            arr.splice(index, 1);
        }
        return arr2;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        var index = arr.length;
        arr.splice(index - 1, 1);
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        for (i = 0; i < arr2.length; i ++) {
            arr1.splice(arr1.length, 0, arr2[i]);
        }
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (i = 0; i < arr.length; i ++) {
            if (arr[i] === item) {
                count += 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var results = [];
        var sorted_arr = arr.sort();
        for (i = 0; i < sorted_arr.length; i ++) {
            if (sorted_arr[i] == sorted_arr[i+1]) {
                results.push(sorted_arr[i]);
            }
        }
        for (i = 0; i < results.length; i ++) {
           if (sorted_arr[i] == sorted_arr[i+1]) {
                results.splice(sorted_arr[i+1], 1);
        }
        return results;
        }
    },

    square : function(arr) {
        var arr2 = []
        for (i = 0; i < arr.length; i ++) {
            var value = arr[i] * arr[i];
            arr2.push(value);
        }
        return arr2;
    },

    findAllOccurrences : function(arr, target) {
        var results = [];
        for (i = 0; i < arr.length; i ++) {
            if (arr[i] == target) {
                results.push(i);
            }
        }
        return results;
    }
  };
});
