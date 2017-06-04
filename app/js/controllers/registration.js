'use strict';

angular.module('iConnectApp')
    .controller('RegistrationController', ['$scope', '$state', 'loginFactory', function ($scope, $state, loginFactory) {
        $scope.Person = {};

        function gotoPersonalPage() {
            if ($scope.Person.type === 'artist') {
                $state.go('app.personal-artist');
            } else if ($scope.Person.type === 'organization') {
                $state.go('app.personal-organization');
            }
        }

        $scope.login = function () {
            // get person
            $scope.Person = {};
            $scope.Person = loginFactory.getPerson($scope.user.email);
            gotoPersonalPage();
        };

        $scope.register = function () {
            // create new Person
            $scope.Person = {};
            $scope.Person.email = $scope.userReg.email;
            $scope.Person.name = $scope.userReg.email;
            $scope.Person.password = $scope.userReg.password;
            $scope.Person.type = 'artist';
            console.log($scope.Person);
            $state.go('app.verification');
        };

        $scope.verification = function () {
            // send sms code

            if (true) {
                // save new Person
                gotoPersonalPage();
            }
        }

    }]);