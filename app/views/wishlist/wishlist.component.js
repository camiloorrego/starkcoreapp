'use strict';

angular.
  module('viewsModule').
  component('wishlistPage', {
    templateUrl: '/views/wishlist/wishlist.template.html',
    controller:
      ($scope, $window) => {

        $scope.todos = [];

        $scope.login = JSON.parse($window.sessionStorage.getItem('login'));

        if ($scope.login.user) {
          $scope.todos = [
            {
              face: '/img/television.png',
              what: 'Television',
              who: 'My location',
              when: '3:08PM',
              notes: "I would like a television"
            },
            {
              face: '/img/iphone.png',
              what: 'Mobile',
              who: 'My city',
              when: '3:08PM',
              notes: "I would like a mobile"
            },
            {
              face: '/img/pc.png',
              what: 'Laptop',
              who: 'My apartment',
              when: '3:08PM',
              notes: "I would like a laptop"
            }
          ];
        }
      }

  });
