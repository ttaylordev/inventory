angular.module( 'thisApp' )
  .directive( 'copyrightDir', function() {
    return {
      restrict: 'E',
      templateUrl: './js/directives/copyright/copyrightTmpl.html',
      controller: 'copyrightCtrl',
    };
  } );