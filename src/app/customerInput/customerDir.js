angular.module('inventoryApp')
  .directive('customerDir', function () {
    return {
      templateUrl: './app/customerInput/customerTmpl.html',
      restrict: 'E',
      controller: 'customerCtrl'
    };
  });
