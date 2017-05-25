'use strict';

angular.module('iConnectApp')
    .controller('RegistrationController', ['$scope', '$state', 'loginFactory', function($scope, $state, loginFactory) {
  $scope.login = function(){
      // get person
  	$scope.Person = {};
    $scope.Person = loginFactory.getPerson($scope.user.email);

      if($scope.Person.type === 'artist'){
          $state.go('app.personal-artist');
      } else if($scope.Person.type === 'organization') {
          $state.go('app.personal-organization');
      }
  };

  $scope.register = function() {
    // save new Person
  };

}]);