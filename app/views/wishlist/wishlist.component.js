'use strict';

angular.
  module('viewsModule').
  component('wishlistPage', {
    templateUrl: '/views/wishlist/wishlist.template.html',
    controller:
      ($scope) => {

        let imagePath = '';
        $scope.todos = [
          {
            face: '/img/television.png',
            what: 'Television',
            who: 'My location',
            when: '3:08PM',
            notes: " I would like a television"
          },
          {
            face: '/img/iphone.png',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          },
          {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          }
        ];

      }

  });
