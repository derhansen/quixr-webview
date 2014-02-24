'use strict';

/* Controllers */

angular.module('quixrWebview.controllers', []).
  controller('TrafficCtrl1', function($scope, $http) {
        $http.get('data/quixr.json').success(function(data) {
            $scope.vhosts = data;
        });
  })
  .controller('DiskspaceCtrl1', function($scope, $http) {
        $http.get('data/quixr.json').success(function(data) {
            $scope.vhosts = data;
        });
  });