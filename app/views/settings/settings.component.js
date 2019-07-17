'use strict';

angular.
  module('viewsModule').
  component('settingsPage', {
    templateUrl: '/views/settings/settings.template.html',
    controller:
      ($scope) => {
        $scope.$on("SendDown", function () {
          console.log(1)
        });
      }

  });
