'use strict';

angular.
  module('sharedModule').
  component('filterList', {
    templateUrl: '/shared/filter-list/filter-list.template.html',
    controller:
      ($scope) => {

        $scope.filters = {
          sale: false,
          date: false,
          like: false,
          status: '',
        }

        $scope.$watch('filters', function (newVal, oldVal) {
          $scope.$emit("update-filters", $scope.filters);
        }, true);


        $scope.statusChange = () => {
          //console.log(1);

        }
      }

  });
