(function() {
  'use strict';

  angular
    .module('myWeather')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($window, $timeout, $scope, $http, $log, weatherFactoryCity) {
    var vm = this;
    vm.city = "Seattle, Wa";
    vm.weather = {};
    //vm.weather = weatherFactoryCity.getCityWeather(vm.city).then(function(data) { vm.weather = data});
    vm.weather = weatherFactoryCity.getCityWeather(vm.city).then(function (response) {
      vm.weather = response
    });
    vm.title = "Weather Service";

    //$scope.userName = "John Carter";
    //vm.userName = "John Carter";

    vm.creationDate = 1464302889239;
  }
})();
