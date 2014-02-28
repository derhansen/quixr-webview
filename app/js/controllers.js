'use strict';

/* Controllers */

angular.module('quixrWebview.controllers', []).
  controller('WrapperCtrl1', function($scope, $location, $routeParams) {
        $scope.isActive = function (viewLocation) {
            return $location.path().indexOf(viewLocation) != -1;
        };
        $scope.searchDisabled = function() {
            return !(typeof($routeParams.vhost) === 'undefined');
        }
    })
  .controller('TrafficCtrl1', function($scope, $http) {
        $http.get('data/quixr.json').success(function(data) {
            $scope.vhosts = data;
        });
  })
  .controller('MonthviewCtrl1', function($scope, $routeParams, $http, $filter) {
        $scope.vhost = $routeParams.vhost;
        $scope.month = $routeParams.month;
        $scope.year = $routeParams.year;
        $scope.display = $routeParams.display;

        $http.get('data/quixr.json').success(function(data) {
            $scope.data = data[$routeParams.vhost][$routeParams.display][$routeParams.year][$routeParams.month];

            var chartObject = {
                type: 'LineChart'
            };

            chartObject.options = {
                legend: {
                    position: 'none'
                }
            }

            chartObject.data = {"cols": [
                {id: "m", label: "Month", type: "string"},
                {id: "b", label: "Traffic", type: "number"}
            ], "rows": {}
            };

            $scope.chartObject = function(unit) {
                chartObject.data.rows = getFormattedData($scope.data, unit);
                return chartObject;
            };
        });

        function getFormattedData(tmpData, unit) {
            var data = [];
            angular.forEach(tmpData, function (value, key) {
                data.push({c:[
                    {v: key},
                    {v: $filter('formatBytes')(value, unit).toFixed(2)}
                ]});
            });
            return data;
        }

  })
  .controller('DiskspaceCtrl1', function($scope, $http) {
        $http.get('data/quixr.json').success(function(data) {
            $scope.vhosts = data;
        });
  });