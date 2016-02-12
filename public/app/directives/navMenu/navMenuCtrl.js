angular.module( "inventoryApp" )
  .controller( "navMenuCtrl", function ( $scope ) {
    $scope.menuItems = [ {
      display: 'Home',
      route: 'landing' //needs to match up with router
    }, {
      display: 'Tasks',
      route: 'jobList'
    }, {
      display: 'Purchase Order',
      route: 'purchaseOrder'
    }, {
      display: 'Inventory',
      route: 'landing'
  } ];
  } );


//TODO: make an inventory list page and route it properly, right now, the inventory is routing to landing within this controller.
