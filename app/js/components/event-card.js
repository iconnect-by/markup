'use strict';

angular.module('iConnectApp')
    .component('eventCard', {
        templateUrl: '/views/template/event-card.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });