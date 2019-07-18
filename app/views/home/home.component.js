'use strict';

angular.
  module('viewsModule').
  component('homePage', {
    templateUrl: '/views/home/home.template.html',
    controller:
      ($scope, $window, $mdDialog) => {


        $scope.deleteItem = (index) => {
          console.log(index);
          const temp = JSON.parse($window.sessionStorage.getItem('items'));
          temp.splice(index, 1);
          $window.sessionStorage.setItem('items', JSON.stringify(temp))
          load();
        }


        $scope.TempItems = [];
        $scope.items = [];
        $scope.filter = '';
        let filters = {};
        $scope.$on("update-filters", function (e, args) {
          console.log(args)
          filters = args;
          filter();
        });

        $scope.add = (ev) => {
          $mdDialog.show({
            controller: DialogController,
            templateUrl: '/views/home/add.template.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
          }).then(function () {
            load();
          }, function () {
            //
          });

        }


        function load() {
          $scope.TempItems = JSON.parse($window.sessionStorage.getItem('items')) || [];

          // Se añade status aleatorio y se hace formato de la fecha
          $scope.TempItems.forEach((value, index, array) => {
            value.status = (Math.floor(Math.random() * 2) + 1) === 1;
            value.datetime = toDateTime(value.date);
          });

          $scope.items = angular.copy($scope.TempItems);
          filter();
        }

        $scope.filterChange = () => {
          filter();
        }

        function filter() {

          let i = angular.copy($scope.TempItems);;

          if (filters.status) {
            i = $scope.TempItems.filter((i) => {
              return i.status === (filters.status === "1");
            });
          }

          if (filters.sale) {
            const now = new Date();
            i = i.filter((i) => {
              return i.datetime.getDay() === now.getDay();
            });
          }

          if (filters.date) {
            const now = new Date();
            i = i.filter((i) => {
              return i.datetime.getMonth() === now.getMonth();
            });
          }

          if (filters.like) {
            i = i.filter((i) => {
              return i.value <= 120;
            });
          }

          if ($scope.filter) {
            i = i.filter((i) => {
              return i.origin.includes($scope.filter) || i.destination.includes($scope.filter);
            });
          }

          $scope.items = i;

        }

        function toDateTime(dateString) {
          if (dateString) {
            const bits = dateString.split(/\D/);
            const utc = Date.UTC(bits[2], --bits[1], bits[0], bits[3], bits[4], bits[5]);
            return new Date(utc);
          }
          return dateString;
        }


        load();

        function DialogController($scope, $mdDialog, $http, $window) {

          $scope.origins = [];
          $scope.destinations = [];
          $scope.data = {};


          $scope.cancel = function () {
            $mdDialog.cancel();
          };

          $scope.save = function () {

            const items = JSON.parse($window.sessionStorage.getItem('items')) || [];
            items.push($scope.data)
            $window.sessionStorage.setItem('items', JSON.stringify(items))
            $mdDialog.hide();
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
      }
  });



