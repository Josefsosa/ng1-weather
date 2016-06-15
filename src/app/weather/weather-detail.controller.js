(function () {
    'use strict';

    angular
        .module('myWeather')
        .controller('WeatherDetailController', WeatherDetailController);

    /** @ngInject */
    function WeatherDetailController($scope, $stateParams, weatherFactory) {
        var vm = this;
        vm.weather = weatherFactory.getWeatherById($stateParams.cityId).then(function(data) { vm.weather = data});

        $scope.forecasts = [];

        function getWeatherById(cityId) {
            weatherFactory.getWeatherById(cityId).then(function (data) {
                $scope.place = data;
            });
        }

        getWeatherById($stateParams.cityId);

        $scope.findWeather = function (cityId) {
            $scope.place = '';
            getWeatherById(cityId);
        };

        //get Forecast
        function getForecast(cityId) {
            weatherFactory.getForecast(cityId).then(function (data) {
                $scope.forecast = data.list;
                $scope.forecasts.push(data.list);
            });
        }
        getForecast($stateParams.cityId);
    }
})();
