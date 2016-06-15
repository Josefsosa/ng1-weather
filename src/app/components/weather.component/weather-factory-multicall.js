  (function() {
  'use strict';

  angular
    .module('myWeather')
    .factory('weatherFactory', weatherFactory);

    function weatherFactory($log, $http,  $q){
    //var API_URL = 'http://api.openweathermap.org/data/2.5';
    var factory = {};
    var apiKey = "b354ed011ca75de82d3613ed183bf51e";
    var apiByCity = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var apiForcast = 'http://api.openweathermap.org/data/2.5/forecast?id=';
    var apiById = 'http://api.openweathermap.org/data/2.5/weather?id=';

    factory.getCityWeather = function (city) {
        var deferred = $q.defer();
        return $http.get(apiByCity + city + "&appid=" + apiKey)
            .then(getCityWeatherComplete)
            .catch(getCityWeatherFailed);

        function getCityWeatherComplete(response) {
          //return deferred.resolve(response.data);
          return response.data;
        }

        function getCityWeatherFailed(error) {
          deferred.reject(error);
          $log.error('XHR Failed for getCityWeather.\n' + angular.toJson(error.data, true))
        }
    };

    factory.getWeatherById  = function(cityid) {    //recieves the city id
        var deferred = $q.defer();
        return $http.get(apiById + cityid + "&appid=" + apiKey)
            .then(getCityWeatherIdComplete)
            .catch(getCityWeatherIdFailed);

        function getCityWeatherIdComplete(response) {
          //return deferred.resolve(response.data);
          return response.data;
        }

        function getCityWeatherIdFailed(error) {
          deferred.reject(error);
          $log.error('XHR Failed for getCityWeather.\n' + angular.toJson(error.data, true))
        }
    };

    factory.getForecast = function(cityid) {
        var deferred = $q.defer();
        return $http.get(apiForcast + cityid + "&appid=" + apiKey)
            .then(getCitForcastComplete)
            .catch(getCityForcastFailed);

       function getCitForcastComplete(response) {
          //return deferred.resolve(response.data);
          return response.data;
        }

        function getCityForcastFailed(error) {
          deferred.reject(error);
          $log.error('XHR Failed for getCityWeather.\n' + angular.toJson(error.data, true))
        }
    };
    return factory;
    }
})();
