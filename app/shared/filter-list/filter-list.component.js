'use strict';

angular.
  module('sharedModule').
  component('filterList', {
    templateUrl: '/shared/filter-list/filter-list.template.html',
    controller:
      ($scope) => {
        $scope.emit = () => {
          $scope.$emit("SendDown", "some data");
        }
        //alert(1)
      }

  });
