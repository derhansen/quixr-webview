'use strict';

/* Filters */

angular.module('quixrWebview.filters', [])
    .filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }])
    .filter('range', function () {
        return function (input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
    })
    .filter('sumByValue', function () {
        return function (data) {
            if (typeof(data) === 'undefined') {
                return 0;
            }
            var sum = 0;
            angular.forEach(data, function (value, key) {
                sum += parseInt(value);
            });
            return sum;
        };
    })
    .filter('averageByValue', function () {
        return function (data) {
            if (typeof(data) === 'undefined' || data === null) {
                return 0;
            }
            var sum = 0;
            var count = 0;
            angular.forEach(data, function (value, key) {
                sum += parseInt(value);
                count++;
            });
            return sum/count;
        };
    })
    .filter('searchByKey', function () {
        return function (items, query) {
            if (query === '' || typeof(query) === 'undefined') return items;
            var result = {};
            angular.forEach(items, function(value, key) {
                if (key.indexOf(query) != -1) {
                    result[key] = value;
                }
            });
            return result;
        }
    })
    .filter('formatBytes', function () {
        return function (data, unit) {
            var formated = 0;
            switch (unit) {
                case 'kb':
                    formated = data / 1024;
                    break;
                case 'mb':
                    formated = data / Math.pow(1024, 2);
                    break;
                case 'gb':
                    formated = data / Math.pow(1024, 3);
                    break;
                case 'tb':
                    formated = data / Math.pow(1024, 4);
                    break;
                default:
                    formated = data;
            }
            return parseFloat(formated);
        };
    })
    .filter('capitalize', function () {
        return function(input, scope) {
            return input.substring(0,1).toUpperCase()+input.substring(1);
        }
    })
;
