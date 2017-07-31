'use strict';

angular.module('iConnectApp')
    .controller('CommonController', ['$scope', 'ngDialog', function($scope, ngDialog) {

        $scope.popUp = function (e) {
            e.preventDefault();

            ngDialog.open({
                template: '../../views/template/dialog-file-upload.html',
                className: 'ngdialog-theme-default',
                plain: false
                //controller: 'SomeController'
            });
        };

    }]);