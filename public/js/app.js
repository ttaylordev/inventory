angular.module( 'thisApp', [ 'ui.router', 'angularModalService' ] )
  .config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/job-list' );
    $stateProvider
      .state( 'joblist', {
        url: '/job-list',
        templateUrl: './js/views/job-list/job-list.html',
        controller: 'jobCtrl',
      } );
  } );
