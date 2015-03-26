'use strict';

angular.module('binhexdec', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'app.converter'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/binhexScreen/binhexScreen.html',
        controller: 'binhexScreenCtrl',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  })
;
