'use strict';

/* Controllers */

angular.module('quixrWebview.controllers', []).
  controller('TrafficCtrl1', function($scope, $http) {
        $http.get('data/quixr.json').success(function(data) {
            $scope.vhosts = data;
        });
  })
  .controller('TrafficMonthCtrl1', function($scope, $routeParams, $http, $filter) {
        $scope.vhost = $routeParams.vhost;
        $scope.month = $routeParams.month;
        $scope.year = $routeParams.year;

        $http.get('data/quixr.json').success(function(data) {
            $scope.trafData = data[$routeParams.vhost]['traffic'][$routeParams.year][$routeParams.month];

            var chartObject = {
                type: 'LineChart'
            };

            chartObject.data = {"cols": [
                {id: "m", label: "Month", type: "string"},
                {id: "b", label: "Traffic", type: "number"}
            ], "rows": {}
            };

            $scope.chartObject = function(unit) {
                chartObject.data.rows = getFormattedData($scope.trafData, unit);
                return chartObject;
            };
        });

        function getFormattedData(tmpData, unit) {
            var trafData = [];
            angular.forEach(tmpData, function (value, key) {
                trafData.push({c:[
                    {v: key},
                    {v: $filter('formatBytes')(value, unit).toFixed(2)}
                ]});
            });
            return trafData;
        }

  })
  .controller('DiskspaceCtrl1', function($scope, $http) {
        $http.get('data/quixr.json').success(function(data) {
            $scope.vhosts = data;
        });
  });