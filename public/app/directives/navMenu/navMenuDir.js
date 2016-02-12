angular.module( "inventoryApp" ).directive( "navMenuDir", function () {
  console.log( 'navMenuDir' );
  return {
    templateUrl: './app/directives/navMenu/navMenuTmpl.html',
    controller: 'navMenuCtrl',
    restrict: 'E'
  }
  //not a route, looks similar, but it's not changing the page
} );
