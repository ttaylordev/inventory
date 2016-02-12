angular.module( "inventoryApp" ).directive( "searchFieldDir", function () {
  return {
    templateUrl: './app/directives/searchField/searchFieldTmpl.html',
    controller: 'searchFieldCtrl',
    restrict: 'AE'
  }
} );
