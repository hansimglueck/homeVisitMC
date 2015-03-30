'use strict';

/**
 * @ngdoc overview
 * @name homeVisitMCApp
 * @description
 * # homeVisitMCApp
 *
 * Main module of the application.
 */
angular
  .module('homeVisitMCApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/dummies.html',
        controller: 'DummiesCtrl'
      })
        .when('/players', {
          templateUrl: 'views/players.html',
          controller: 'PlayersCtrl'
        })
        .when('/matching', {
          templateUrl: 'views/matching.html',
          controller: 'MatchingCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
