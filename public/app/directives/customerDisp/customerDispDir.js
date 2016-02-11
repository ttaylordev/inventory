angular.module( "inventoryApp" )
  .directive( "customerDispDir", function () {
    return {
      templateUrl: '.app/directives/customer/customerDisp.html',
      controller: 'customerDispCtrl',
      restrict: 'E'
    }
  } );
