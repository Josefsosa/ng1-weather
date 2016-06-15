(function() {
  'use strict';

  angular
    .module('myWeather')
    .controller('weatherCtrl', weatherCtrl);

  /** @ngInject */
  function weatherCtrl(weatherService) {
    var vm = this;

    function fetchWeather(city) {
        weatherService.getWeather(city).then(function(data){
          vm.place = data;
        }); 
      }
      
     vm.fetchWeather('Seattle, Wa');

      vm.findWeather = function(city) {
       vm.place = '';
        fetchWeather(city);
      };
  }
})();
