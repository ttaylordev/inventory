angular.module( "inventoryApp" )
  .controller( "searchFieldCtrl", function ( $scope, mainSvc ) {
    $scope.things = [ {
      id: 1,
      label: 'aLabel',
      subItem: {
        name: 'aSubItem'
      }
    }, {
      id: 2,
      label: 'bLabel',
      subItem: {
        name: 'bSubItem'
      }
    } ];
    $scope.selected = $scope.things[ 0 ];
    // dummy data until I can get my mainSvc to return the goodness.
    // NOTE: It's using an array of objects...
  } );
//TODO: make an inventory list page and route it properly, right now, the inventory is routing to landing within this controller.
