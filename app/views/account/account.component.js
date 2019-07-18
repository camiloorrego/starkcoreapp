'use strict';

angular.
  module('viewsModule').
  component('accountPage', {
    templateUrl: '/views/account/account.template.html',
    controller:
      ($scope, $window) => {


        $scope.logout = () => {
          $window.sessionStorage.setItem('login', JSON.stringify({}))
          load();
        }

        $scope.login = () => {
          const login = { user: 'camilo.orrego', name: 'Camilo Orrego', email: 'camilo.orrego@gmail.com' };
          $window.sessionStorage.setItem('login', JSON.stringify(login))
          load();
        }

        function load() {
          const login = JSON.parse($window.sessionStorage.getItem('login'));

          $scope.pic = login.user ?
            'https://media.licdn.com/dms/image/C5103AQHvf8EWi6uUvQ/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=ZRqE8OLEz4SCHJHjQFZNPY9vl0i3DkDO_Y1qhsvRQHo' :
            'https://ciudadvirtual.cl/wp-content/uploads/2018/02/user_no_image.png';
          $scope.user = login.user ? login.user : 'Username';
          $scope.name = login.name ? login.name : 'Name';
          $scope.email = login.email ? login.email : 'Email';
          $scope.log = login.user ? true : false;
        }

        load();
      }

  });
