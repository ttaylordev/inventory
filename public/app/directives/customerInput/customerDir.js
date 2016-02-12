angular.module( "inventoryApp" )
  .directive( "customerDir", function () {
    return {
      templateUrl: './app/directives/customerInput/customerTmpl.html',
      controller: 'customerCtrl',
      restrict: 'E'
    }
  } );
