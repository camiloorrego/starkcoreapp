'use strict';

angular.
  module('viewsModule').
  component('messagesPage', {
    templateUrl: '/views/messages/messages.template.html',
    controller:
      ($scope, $window) => {

        $scope.messages = []


        $scope.login = JSON.parse($window.sessionStorage.getItem('login'));

        if ($scope.login.user) {
          $scope.messages = [{
            to: 'info@othercompany.com',
            from: 'camilo.orrego@mycompany.com',
            subject: 'Greeting',
            message: 'Hello! How are you?'
          },
          {
            to: 'info@othercompany.com',
            from: 'camilo.orrego@mycompany.com',
            subject: 'Invoice',
            message: 'Pay me'
          }]
        }




        $scope.query = {
          order: 'to',
          limit: 5,
          page: 1
        };

      }

  });
