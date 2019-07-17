'use strict';

// Define the `phonecatApp` module
angular.module('starkCoreApp')
  .controller('mainCtrl',
    ($scope) => {

      $scope.selectedIndex = 0;

      $scope.change = (index) => {
        $scope.selectedIndex = index;
      }

      $scope.isActive = (index) => {
        return $scope.selectedIndex == index ? 'tab-active' : '';
      }
    });