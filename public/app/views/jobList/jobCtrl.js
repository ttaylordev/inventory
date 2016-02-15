angular.module( 'inventoryApp' )
  .controller( 'jobCtrl', [ '$scope', '$location', 'mainSvc', 'woSvc', function ( $scope, $location, mainSvc woSvc ) {

    // coming from
    // dummy data
    // TODO: must be replaced with a call from the server
    $scope.jobs = [ {
        location: 'Provo',
        name: 'Brack',
        time: new Date(),
        details: "",
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
        } ]
      },
      {
        location: 'Orem',
        name: 'Sam',
        time: "8:00a",
        details: "",
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
        details: "",
        parts: [ {
          name: 'purple cups'
        }, {
          name: '3/4" hose'
        } ]
      } ]

  } ] );

// function to load addJob modal
// $scope.addJob = function () {
//   console.log( 'addJob button is logging' );
//   $location.path( '../newJob/newJobTemplate' );
// }



//date filter that filters it into a time format
// lookup angular date format
// /:
// on an html input use a date time picker input, this might avoid having to put it into a date time format string
