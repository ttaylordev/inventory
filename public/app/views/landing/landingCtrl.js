angular.module( 'inventoryApp' )
  .controller( 'landingCtrl', function ( $scope, mainSvc, ModalService ) {
    console.log( 'landingCtrl is logging inside' );
    $scope.testlandingCtrl = 'landingCtrl is working';
    $scope.openLoginModal = function () {
      ModalService.showModal( {
          templateUrl: "./app/views/auth/authTmpl.html", // points to the URL of the view
          controller: "authCtrl",
          inputs: {
            key: 'user'
          }
          // key gets passed into inventory app
        } )
        .then( function ( modal ) {
          //function that runs when modal closes
          modal.close.then( function ( then ) { // then will equal whatever happened to close
            $scope.confirmationAnswer = then;
            console.log( then );
          } );
        } );
    }


  } );
console.log( 'landing service is logging from outside' );
