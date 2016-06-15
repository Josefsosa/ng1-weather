(function() {
  'use strict';

  angular
    .module('myWeather')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      }).state('weather', {
        url: '/weather',
        templateUrl: 'app/weather/weather-dashboard.html',
        controller: 'WeatherController',
        controllerAs: 'wc'
      }).state('weatherDetail', {
        url: '/detail/:cityId',
        templateUrl: 'app/weather/weather-detail.html',
        controller: 'WeatherDetailController',
        controllerAs: 'wdc'
      });
    $urlRouterProvider.otherwise('/');
  }
})();
