angular.module( "inventoryApp" )
  .directive( "customerDir", function () {
    console.log( 'logging form customerDir' );
    return {
      templateUrl: './app/directives/customerInput/customerTmpl.html',
      controller: 'customerCtrl',
      restrict: 'E'
    }
  } );
