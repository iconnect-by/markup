'use strict';

angular.module('iConnectApp')
    .component('eventHistoryCard', {
        templateUrl: '/views/template/event-history-card.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });