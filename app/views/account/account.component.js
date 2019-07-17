'use strict';

angular.
  module('viewsModule').
  component('accountPage', {
    templateUrl: '/views/account/account.template.html',
    controller:
      ($scope) => {
        $scope.$on("SendDown", function () {
          console.log(1)
        });
      }

  });
