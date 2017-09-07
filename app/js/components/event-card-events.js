'use strict';

angular.module('iConnectApp')
    .component('eventCardEvents', {
        templateUrl: '/views/template/event-card-events.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });