'use strict';

angular.
  module('starkCoreApp').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
        when('/deliveries', {
          template: '<delivery-list></delivery-list>'
        }).
        otherwise({
          redirectTo: '/deliveries'
        });
    }
  ]);