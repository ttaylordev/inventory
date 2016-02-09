angular.module( 'thisApp' )
  .controller( 'jobCtrl', function ( mainSvc, $scope, ModalService ) {
    $scope.jobs = [ {
        location: 'Provo',
        name: 'Brack',
        time: new Date(),
        parts: [ {
          name: 'part #1'
        }, {
          name: 'part #2'
        }, {
          name: 'part #1'
        }, {
          name: 'part #2'
        }, {
          name: 'part #1'
        }, {
          name: 'part #2'
        }, {
          name: 'part #1'
        }, {
          name: 'part #2'
        }, {
          name: 'part #1'
        }, {
          name: 'part #2'
        }, {
          name: 'part #1'
        }, {
          name: 'part #2'
        } ]
      },
      {
        location: 'Orem',
        name: 'Sam',
        time: "8:00a",
        parts: [ {
          name: 'Asst objects'
        }, {
          name: 'part #1'
        } ]
      },
      {
        location: 'American Fork',
        name: 'Emily',
        time: "1:00p",
        parts: [ {
          name: 'purple cups'
        }, {
          name: '3/4" hose'
        } ]
      } ]
  } );


//date filter that filters it into a time format
// lookup angular date format
// /:
// on an html input use a date time picker input, this might avoid having to put it into a date time format string
