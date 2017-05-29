'use strict';

angular.module('iConnectApp')
    .controller('PersonalController', ['$scope', function($scope) {
        $scope.itunesSelect = {
            "Itunes Festival":[1,2,3],
            "Itunes Show":[1,2,3]
        };

        $scope.eventSources = [];
        $scope.uiConfig = {
            calendar:{
                height: 'auto',
                editable: true,
                header:{
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                eventClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

    }]);