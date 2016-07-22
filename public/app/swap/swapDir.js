angular.module('inventoryApp')
  .directive('swapDir', function () {
    return {
      templateUrl: './app/swap/swap.html',
      controller: 'swapCtrl',
      restrict: 'E'
    }
  });
