angular.module( 'inventoryApp' )
  .controller( 'copyrightCtrl', function( $scope, copyrightSvc ) {
    console.log( 'copyrightCtrl is logging inside' );
    $scope.testCopyrightCtrl = 'copyrightCtrl is working';
    $scope.copyrightSvcIsLoading = copyrightSvc.testCopyrightSvc();
    $scope.getYear = copyrightSvc.yearFunc();
  } );

console.log( 'copyrightCtrl is logging outside' );