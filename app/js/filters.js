'use strict';

/* Filters */

angular.module('quixrWebview.filters', [])
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++)
            input.push(i);
        return input;
    };
  })
  .filter('sumByValue', function() {
    return function(data) {
        if (typeof(data) === 'undefined') {
            return 0;
        }
        var sum = 0;
        $.each(data, function(index, value) {
            sum += parseInt(value);
        });
        return sum;
    };
  })
  .filter('formatBytes', function() {
    return function(data, unit) {
        var formated = 0;
        switch (unit) {
            case 'KB':
                formated = data / 1024;
                break;
            case 'MB':
                formated = data / Math.pow(1024,2);
                break;
            case 'GB':
                formated = data / Math.pow(1024,3);
                break;
            case 'TB':
                formated = data / Math.pow(1024,4);
                break;
            default:
                formated = data;
        }
        return parseFloat(formated);
    };
  })
;
