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

    describe('capitalizeFirstLetter', function () {
        it('should capitalize first letter of string string', inject(function (capitalizeFirstLetterFilter) {
            expect(capitalizeFirstLetterFilter('test')).toEqual('Test')
        }));
        it('should return empty string if empty string given', inject(function (capitalizeFirstLetterFilter) {
            expect(capitalizeFirstLetterFilter('')).toEqual('')
        }))
        it('should return given sting if string starting with number', inject(function (capitalizeFirstLetterFilter) {
            expect(capitalizeFirstLetterFilter('0test')).toEqual('0test')
        }))
    });

    describe('searchByKey', function () {
        it('should return items if no query given', inject(function (searchByKeyFilter) {
            var items = {1:'item1', 2:'item2', 3:'item3'};
            expect(searchByKeyFilter(items)).toEqual(items)
        }));
        it('should return items if query empty', inject(function (searchByKeyFilter) {
            var items = {1:'item1', 2:'item2', 3:'item3'};
            expect(searchByKeyFilter(items, '')).toEqual(items)
        }));
        it('should return exected item if query matches', inject(function (searchByKeyFilter) {
            var items = {'item1':'item1', 'item2':'item2', 'item3':'item3'};
            expect(searchByKeyFilter(items, 'item2')).toEqual({'item2':'item2'})
        }));
        it('should return ignore letter case for given query', inject(function (searchByKeyFilter) {
            var items = {'Item1':'Item1', 'Item2':'Item2', 'Item3':'Item3'};
            expect(searchByKeyFilter(items, 'item2')).toEqual({'Item2':'Item2'})
        }));
    });

    describe('averageByValue', function () {
        it('should return zero if not data given', inject(function (averageByValueFilter) {
            expect(averageByValueFilter(null)).toEqual(0)
        }));
        it('should calculate average of int-values from the given object', inject(function (averageByValueFilter) {
            var data = {1:10,2:20,3:30};
            expect(averageByValueFilter(data)).toEqual(20)
        }))
        it('should return NaN if object does contain string', inject(function (averageByValueFilter) {
            var data = {1:10,2:20,3:'wrong'};
            expect(averageByValueFilter(data)).toBeNaN()
        }))
    });
});
