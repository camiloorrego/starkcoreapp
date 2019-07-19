'use strict';

angular.
  module('viewsModule').
  component('homePage', {
    templateUrl: '/views/home/home.template.html',
    controller:
      ($scope, $window, $mdDialog) => {


        $scope.deleteItem = (index) => {
          const temp = JSON.parse($window.sessionStorage.getItem($scope.login.user + '_items'));
          temp.splice(index, 1);
          $window.sessionStorage.setItem($scope.login.user + '_items', JSON.stringify(temp))
          load();
        }

        $scope.TempItems = [];
        $scope.items = [];
        $scope.search = '';
        let filters = {};
        $scope.$on("update-filters", function (e, args) {
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
          $scope.TempItems = JSON.parse($window.sessionStorage.getItem($scope.login.user + '_items')) || [];

          // Se hace formato de la fecha
          $scope.TempItems.forEach((value, index, array) => {
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

          if ($scope.search) {
            i = i.filter((i) => {
              return i.origin.includes($scope.search) || i.destination.includes($scope.search);
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

        function login() {
          $scope.login = JSON.parse($window.sessionStorage.getItem('login'));
        }

        login();
        load();

        function DialogController($scope, $mdDialog, $http, $window) {

          $scope.origins = [];
          $scope.destinations = [];
          $scope.data = {};
          $scope.login = JSON.parse($window.sessionStorage.getItem('login'));

          $scope.cancel = function () {
            $mdDialog.cancel();
          };

          $scope.save = function () {

            const items = JSON.parse($window.sessionStorage.getItem($scope.login.user + '_items')) || [];
            $scope.data.status = (Math.floor(Math.random() * 2) + 1) === 1;
            items.push($scope.data)
            $window.sessionStorage.setItem($scope.login.user + '_items', JSON.stringify(items))
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



