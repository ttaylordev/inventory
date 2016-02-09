angular.module( 'thisApp' )
  .config( function ( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/joblist' );
    console.log( 'config is logging within' );

    var jobListState = {
      name: 'jobList',
      url: '/joblist',
      templateUrl: './js/views/joblist/joblist.html',
      controller: 'jobCtrl'
    };
    var newJobModalState = {
      name: 'jobList.newJobModal',
      url: '/newJob',
      templateUrl: './js/views/newJob/newJobtemplate.html',
      controller: 'newJobCtrl'
    };
    var authState = {
      name: '',
      url: '/authentication',
      templateUrl: './js/views/auth/authTmpl.html',
      controller: 'authCtrl'

    }
    $stateProvider
      .state( jobListState )
      .state( newJobModalState );

  } );
