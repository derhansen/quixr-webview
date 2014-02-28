'use strict';


// Declare app level module which depends on filters, and services
angular.module('quixrWebview', [
  'ngRoute',
  'quixrWebview.filters',
  'quixrWebview.services',
  'quixrWebview.directives',
  'quixrWebview.controllers',
  'googlechart'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/traffic', {templateUrl: 'partials/traffic.html', controller: 'TrafficCtrl1'});
  $routeProvider.when('/diskspace', {templateUrl: 'partials/diskspace.html', controller: 'DiskspaceCtrl1'});
  $routeProvider.when('/:display/:vhost/:year/:month', {templateUrl: 'partials/monthview.html', controller: 'MonthviewCtrl1'});
  $routeProvider.otherwise({redirectTo: '/traffic'});
}]);
