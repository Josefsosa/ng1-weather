(function() {
  'use strict';

  angular
    .module('myWeather')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($window, $timeout, $scope, $http, $log, weatherFactory) {
    var vm = this;
    vm.places = angular.fromJson($window.localStorage.getItem('places') || '[]');
    vm.city = "Seattle, Wa";
    vm.apiKey = "b354ed011ca75de82d3613ed183bf51e";
    vm.weather = {};
    vm.cityNames = ["Seattle, Wa", "Everett, Wa", "San Fransico, Ca"];
    vm.weather = weatherFactory.getCityWeather(vm.city).then(function(data) { vm.weather = data});
    $scope.places = angular.fromJson($window.localStorage.getItem('places') || '[]');
    //$log.warn('Weather JSON' + vm.weather);
    
    vm.title = "Weather list";
    
    vm.creationDate = 1464302889239;   
    
    $scope.places = angular.fromJson($window.localStorage.getItem('places') || '[]');

    $scope.addWeather = function(city) {
      weatherFactory.getCityWeather(city).then(function(data){
        $scope.places.push(data);
        $window.localStorage.setItem('places', angular.toJson($scope.places));
      });
    };

     $scope.removePlace = function(index) {
      var warning = window.confirm('Are you sure you want to remove this location?');
      if (warning) {
        $scope.places.splice(index, 1);
        $window.localStorage.setItem('places', angular.toJson($scope.places));
      }
    };
        
  }
})();
