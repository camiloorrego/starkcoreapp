'use strict';

angular.
  module('viewsModule').
  component('settingsPage', {
    templateUrl: '/views/settings/settings.template.html',
    controller:
      ($scope, $translate) => {

        $scope.lan = 'en'

        $scope.changeLanguage = () => {
          $translate.use($scope.lan);
        };
      }

  });
