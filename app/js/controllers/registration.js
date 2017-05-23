'use strict';

angular.module('iConnectApp')
    .controller('RegistrationController', ['$scope', function($scope) {
  //$scope.message = "Welcome Home";

  $scope.login = function(){
  	$scope.message = "Welcome " + $scope.user.email;
  };

  $scope.register = function() {
   $scope.message = "Welcome " + $scope.user.firstname + " " + $scope.user.lastname;
  };

}]);