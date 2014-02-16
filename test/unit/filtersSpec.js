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
            var unit = 'KB';
            expect(formatBytesFilter(data, unit)).toEqual(1073741824);
        }));

        it('should calculate given bytes to MB', inject(function (formatBytesFilter) {
            var unit = 'MB';
            expect(formatBytesFilter(data, unit)).toEqual(1048576);
        }));

        it('should calculate given bytes to GB', inject(function (formatBytesFilter) {
            var unit = 'GB';
            expect(formatBytesFilter(data, unit)).toEqual(1024);
        }));

        it('should calculate given bytes to TB', inject(function (formatBytesFilter) {
            var unit = 'TB';
            expect(formatBytesFilter(data, unit)).toEqual(1);
        }));

        it('should return data if not unit given', inject(function (formatBytesFilter) {
            expect(formatBytesFilter(data, null)).toEqual(data);
        }));
    });
});
