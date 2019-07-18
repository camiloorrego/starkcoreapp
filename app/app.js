'use strict';

// Define the `phonecatApp` module
angular.module('starkCoreApp')
  .controller('mainCtrl',
    ($scope, $window, $location) => {

      const login = { user: 'camilo.orrego', name: 'Camilo Orrego', email: 'camilo.orrego@gmail.com' };
      $window.sessionStorage.setItem('login', JSON.stringify(login))

      $scope.selectedIndex = 0;
      $location.path('/home')
      $scope.change = (index) => {
        $scope.selectedIndex = index;
      }

      $scope.isActive = (index) => {
        return $scope.selectedIndex == index ? 'tab-active' : '';
      }
    });