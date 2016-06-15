(function(){
    'use strict';

    angular
      .module('myWeather')
      .factory('weatherFactoryCity', weatherFactoryCity);

      function weatherFactoryCity($log, $http){
      var apiHost =  'http://api.openweathermap.org/data/2.5/weather?q=';

      var factory = {
        apiHost: apiHost,
        getCityWeather: getCityWeather
      };

      function getCityWeather(city) {
      var apiKey = "b354ed011ca75de82d3613ed183bf51e";

      return $http.get(apiHost + city + "&appid=" + apiKey)
      .then(getCityWeatherComplete)
      .catch(getCityWeatherFailed);

      function getCityWeatherComplete(response){
        return response.data;
      }
      function getCityWeatherFailed(error){
        $log.error('XHR Failed for getCityWeather.\n' + angular.toJson(error.data, true))
      }
    }
    return factory;
  }
  })();
