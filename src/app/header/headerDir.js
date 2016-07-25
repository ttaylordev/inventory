angular.module( "inventoryApp" )
  .directive( "headerDir", function () {
    return {
      templateUrl: './app/header/headerTmpl.html',
      controller: 'headerCtrl',
      restrict: 'E'
    }
  } );
// directives get their own template files, same with routes
// directives don't replace your router
//
// why it's running twice
// not capturing the state the first time
// in either case it's not populating, probably because the first one is blank.
