angular.module( "inventoryApp" ).directive( "swapDir", function () {
  return {
    templateUrl: './app/directives/modals/swap/swap.html',
    controller: 'swapCtrl',
    restrict: 'E'
  }
} );
