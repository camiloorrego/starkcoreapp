'use strict';

angular.
  module('viewsModule').
  component('homePage', {
    templateUrl: '/views/home/home.template.html',
    controller:
      ($scope, $window) => {
        console.log($window);


        $scope.items = [];
        let filters = {};
        $scope.$on("update-filters", function (e, args) {
          console.log(args)
          filters = args;
        });

        $scope.add = () => {
          console.log(1);

        }

        function init() {


          $scope.items = JSON.parse($window.sessionStorage.getItem('items')) || [];
        }


        init();
      }

  });
