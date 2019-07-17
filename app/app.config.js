'use strict';

angular.
  module('starkCoreApp').
  config(['$routeProvider', '$mdIconProvider', '$mdThemingProvider',
    function config($routeProvider, $mdIconProvider, $mdThemingProvider) {

      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/messages', {
          template: '<messages-page></messages-page>'
        }).
        when('/wishlist', {
          template: '<wishlist-page></wishlist-page>'
        }).
        when('/settings', {
          template: '<settings-page></settings-page>'
        }).
        when('/account', {
          template: '<account-page></account-page>'
        }).
        otherwise({
          redirectTo: '/home'
        });

      $mdIconProvider.icon('lightbulb', 'img/light-bulb.svg', 24)
      .icon('sale', 'img/sale.svg', 24)
      .icon('calendar', 'img/calendar.svg', 24)
      .icon('heart', 'img/heart.svg', 24);

      var customPrimary = {
        '50': '#3a84a7',
        '100': '#337594',
        '200': '#2d6681',
        '300': '#26576e',
        '400': '#20485b',
        '500': '#193948',
        '600': '#122a35',
        '700': '#0c1b22',
        '800': '#050c0f',
        '900': '#000000',
        'A100': '#4093ba',
        'A200': '#519ec3',
        'A400': '#64a9c9',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#171e43',
        '100': '#1e2756',
        '200': '#252f69',
        '300': '#2b387c',
        '400': '#32408f',
        '500': '#3849a2',
        '600': '#4d5ec1',
        '700': '#606fc7',
        '800': '#7280ce',
        '900': '#8591d5',
        'A100': '#4d5ec1',
        'A200': '#3f51b5',
        'A400': '#3849a2',
        'A700': '#98a2db'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

      $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')

    }
  ]);