'use strict';

angular.
  module('viewsModule').
  component('deliveryList', {
    templateUrl: '/views/delivery-list/delivery-list.template.html',
    controller:
      ($scope) => {
        $scope.$on("SendDown", function () {
          console.log(1)
        });
      }

  });
