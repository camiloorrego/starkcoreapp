'use strict';

angular.
  module('viewsModule').
  component('messagesPage', {
    templateUrl: '/views/messages/messages.template.html',
    controller:
      ($scope) => {
        $scope.$on("SendDown", function () {
          console.log(1)
        });
      }

  });
