angular.module('inventoryApp')
  .controller('headerCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.state = $state;
    $scope.test = 'this is a test';
  }]);
// can get id's with stateParams,

// any parameter I can get form the URL, I can use stateParams.
// state is an object with several methods and key/values.
// in headerTmpl.html, I am accessing those by calling them with dot notation.
//  e.g. {{state.current.name}}
