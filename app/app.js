'use strict';

// Define the `phonecatApp` module
angular.module('starkCoreApp')
  .controller('mainCtrl',
    ($scope, $location) => {

      $scope.selectedIndex = 0;

      $scope.$watch('selectedIndex', function (current, old) {
        switch (current) {
          case 0:
            $location.url("/deliveries");
            break;
          case 1:
            $location.url("/deliveries");
            break;
          case 2:
            $location.url("/deliveries");
            break;
        }
      });

      $scope.change = (index) => {
        $scope.selectedIndex = index;
      }
    });