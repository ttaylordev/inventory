angular.module( 'thisApp', [ 'ui.router', 'angularModalService' ] )
  .config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/job-list' );

    var jobListState = {
      name: 'jobList',
      url: '/job-list',
      templateUrl: './js/views/job-list/job-list.html',
      controller: 'jobCtrl'
    };
    var newJobModalState = {
      name: 'jobList.newJobModal',
      url: '/new-job',
      templateUrl: './js/views/new-job/new-job-template.html',
      controller: 'newJobCtrl'
    };

    $stateProvider
      .state( jobListState )
      .state( newJobModalState );

  } );
