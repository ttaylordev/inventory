angular.module( "inventoryApp" )
  .directive( "customerDispDir", function () {
    return {
      templateUrl: './app/customerDisp/customerDisp.html',
      controller: 'customerDispCtrl',
      restrict: 'E',
      scope:{
        customer:"="
      }
    }
  } );
