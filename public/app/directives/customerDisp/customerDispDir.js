angular.module( "inventoryApp" )
  .directive( "customerDispDir", function () {
    return {
      templateUrl: './app/directives/customerDisp/customerDisp.html',
      controller: 'customerDispCtrl',
      restrict: 'E'
    }
  } );
