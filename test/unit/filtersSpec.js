'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {
    beforeEach(module('quixrWebview.filters'));

    describe('interpolate', function () {
        beforeEach(module(function ($provide) {
            $provide.value('version', 'TEST_VER');
        }));

        it('should replace VERSION', inject(function (interpolateFilter) {
            expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
        }));
    });

    describe('formatBytes', function () {
        var data;

        beforeEach(function () {
            data = Math.pow(1024, 4);
        });

        it('should calculate given bytes to KB', inject(function (formatBytesFilter) {
            var unit = 'kb';
            expect(formatBytesFilter(data, unit)).toEqual(1073741824);
        }));

        it('should calculate given bytes to MB', inject(function (formatBytesFilter) {
            var unit = 'mb';
            expect(formatBytesFilter(data, unit)).toEqual(1048576);
        }));

        it('should calculate given bytes to GB', inject(function (formatBytesFilter) {
            var unit = 'gb';
            expect(formatBytesFilter(data, unit)).toEqual(1024);
        }));

        it('should calculate given bytes to TB', inject(function (formatBytesFilter) {
            var unit = 'tb';
            expect(formatBytesFilter(data, unit)).toEqual(1);
        }));

        it('should return data if no unit given', inject(function (formatBytesFilter) {
            expect(formatBytesFilter(data, null)).toEqual(data);
        }));
    });

    describe('sumByValue', function () {
       it('should return zero if not data given', inject(function (sumByValueFilter) {
           expect(sumByValueFilter(null)).toEqual(0)
       }));

        it('should add all numbers from the given object', inject(function (sumByValueFilter) {
            var data = {1:10,2:20,3:30};
            expect(sumByValueFilter(data)).toEqual(60)
        }))
        it('should return NaN if object does contain string', inject(function (sumByValueFilter) {
            var data = {1:10,2:20,3:'wrong'};
            expect(sumByValueFilter(data)).toBeNaN()
        }))
    });
});
