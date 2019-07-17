'use strict';

angular.
  module('viewsModule').
  component('homePage', {
    templateUrl: '/views/home/home.template.html',
    controller:
      ($scope) => {
        $scope.$on("SendDown", function () {
          console.log(1)
        });
      }

  });
