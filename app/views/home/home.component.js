'use strict';

angular.
  module('viewsModule').
  component('homePage', {
    templateUrl: '/views/home/home.template.html',
    controller:
      ($scope) => {
        $scope.$on("update-filters", function (e, args) {
          console.log(args)
        });
      }

  });
