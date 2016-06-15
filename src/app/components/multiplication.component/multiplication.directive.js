(function() {
  'use strict';

  angular
    .module('myWeather')
    .directive('multiplicationTable', multiplicationTable);

  /** @ngInject */
  function multiplicationTable() {
    var directive = {
      restrict: 'E',
      scope: {
             x : '=',
             y : '='
      },
      templateUrl : 'multiplication-table.html',
      bindToController: true,
      controllerAs: 'ctrl'
    };

    return directive;

    /** @ngInject */
    function multiplyController() {
      var vm = this;
      vm.x = this.x || 0;
      vm.y = this.y || 0;

      vm.$ontable = this.rows = [];
      for(var i=0;i<y;i++) {
        var array = table[i] = [];
        for(var j=0;j<x;j++) {
          array.push(1); 
        }
      }
    }
  }

})();
