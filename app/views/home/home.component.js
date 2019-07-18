'use strict';

angular.
  module('viewsModule').
  component('homePage', {
    templateUrl: '/views/home/home.template.html',
    controller:
      ($scope, $window, $mdDialog) => {
        console.log($window);


        $scope.items = [];
        let filters = {};
        $scope.$on("update-filters", function (e, args) {
          console.log(args)
          filters = args;
        });

        $scope.add = (ev) => {
          $mdDialog.show({
            controller: DialogController,
            templateUrl: '/views/home/add.template.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
          })
            .then(function (answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
              $scope.status = 'You cancelled the dialog.';
            });

        }

        function DialogController($scope, $mdDialog, $http) {

          $scope.origins = [];
          $scope.destinations = [];
          $scope.data = {};



          $scope.hide = function () {
            $mdDialog.hide();
          };

          $scope.cancel = function () {
            $mdDialog.cancel();
          };

          $scope.answer = function (answer) {
            $mdDialog.hide(answer);
          };

          function getOrigins() {
            $http({ method: 'GET', url: '/assets/data/origins.json' }).
              then(function (response) {
                $scope.origins = response.data;
              }, function (response) {
                console.log(response);
              });
          }

          function getDestinations() {
            $http({ method: 'GET', url: '/assets/data/destinations.json' }).
              then(function (response) {
                $scope.destinations = response.data;
              }, function (response) {
                console.log(response);
              });
          }

          function load() {
            getOrigins();
            getDestinations();
          }

          load();
        }

        function init() {


          $scope.items = JSON.parse($window.sessionStorage.getItem('items')) || [];
        }


        init();
      }



  });



