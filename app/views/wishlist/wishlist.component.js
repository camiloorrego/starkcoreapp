'use strict';

angular.
  module('viewsModule').
  component('wishlistPage', {
    templateUrl: '/views/wishlist/wishlist.template.html',
    controller:
      ($scope) => {
        $scope.$on("SendDown", function () {
          console.log(1)
        });
      }

  });
