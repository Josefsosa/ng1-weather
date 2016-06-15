(function() {
  'use strict';

  angular
    .module('myWeather')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
