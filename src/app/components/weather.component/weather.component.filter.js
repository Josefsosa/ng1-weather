(function() {
  'use strict';

  angular
    .module('myWeather')
    .filter('kelvinToCelsius', kelvinToCelsius);

    function kelvinToCelsius() {
    return function(kelvin) {
      return parseFloat(kelvin) - 273.15;
    };
  }
})();

(function() {
  'use strict';

  angular
    .module('myWeather')
    .filter('toFarenheit', toFarenheit);

    function toFarenheit() {
     return function(far) {
      return parseFloat(far) *(9/5)+32;
    };
  }
})();