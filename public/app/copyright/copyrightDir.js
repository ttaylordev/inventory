angular.module( 'inventoryApp' )
  .directive( 'copyrightDir', function() {
    return {
      restrict: 'E',
      templateUrl: './js/copyright/copyrightTmpl.html',
      controller: 'copyrightCtrl',
    };
  } );