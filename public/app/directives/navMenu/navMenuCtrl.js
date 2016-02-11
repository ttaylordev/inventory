angular.module( "inventoryApp" ).controller( "navMenuCtrl", function ( $scope ) {
  $scope.menuItems = [ {
    display: 'Home',
    route: ''
    }, {
    display: 'Tasks'
    }, {
    display: 'Purchase Order'
    }, {
    display: 'Inventory'
  } ];
} );
