'use strict';

angular.module('iConnectApp')

    .controller('CommonController', ['$scope', 'ngDialog', 'Notification', function($scope, ngDialog, Notification) {

        $scope.popUp = function (e) {
            e.preventDefault();

            ngDialog.open({
                template: '../../views/template/dialog-file-upload.html',
                className: 'ngdialog-theme-default',
                plain: false
                //controller: 'SomeController'
            });
        };

        $scope.BottomRight = function() {
            Notification.error({message: 'Error Bottom Right', positionY: 'bottom', positionX: 'right'});
        };

    }]);