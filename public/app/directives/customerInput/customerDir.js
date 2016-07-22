angular.module( "inventoryApp" )
  .directive( "customerDir", function () {
    return {
      templateUrl: './app/directives/customerInput/customerTmpl.html',
      restrict: 'E',
      controller: 'customerCtrl'
    }
  } );
