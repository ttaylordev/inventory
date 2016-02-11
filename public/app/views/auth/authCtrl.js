angular.module( 'inventoryApp' )
  .controller( 'authCtrl', function ( $scope, $location, mainSvc, close, key ) {
    console.log( 'authCtrl is logging inside' );
    $scope.testauthCtrl = 'authCtrl is working';
    $scope.close = close;
    $scope.key = key;
    $scope.login = function ( user ) {
        user.email
        user.password
      }
      // can pass the user object into the close functino, or I can run it in the authCtrl
  } );

// every modal gets passed in a function called close
