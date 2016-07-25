angular.module('inventoryApp')
  .directive('searchFieldDir', function () {
    return {
      templateUrl: './app/searchField/searchFieldTmpl.html',
      controller: 'searchFieldCtrl',
      restrict: 'AE'
    }
  });
