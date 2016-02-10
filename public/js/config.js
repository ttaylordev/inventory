angular.module( 'thisApp' )
  .config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/jobList' );

    var jobListState = {
      name: 'jobList',
      url: '/jobList',
      templateUrl: './js/views/joblist/jobList.html',
      controller: 'jobCtrl'
    };
    var newJobModalState = {
      name: 'jobList.newJobModal',
      url: '/newJob',
      templateUrl: './js/views/newJob/newJobTemplate.html',
      controller: 'newJobCtrl'
    };
    // var authState = {
    //   name: '',
    //   url: '/authentication',
    //   templateUrl: './js/views/auth/authTmpl.html',
    //   controller: 'authCtrl'
    //
    // };

    $stateProvider
      .state( jobListState )
      .state( newJobModalState )
      // .state( authState );


  } );
