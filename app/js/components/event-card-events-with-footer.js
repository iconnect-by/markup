'use strict';

angular.module('iConnectApp')
    .component('eventCardEventsFooter', {
        templateUrl: '/views/template/event-card-events-with-footer.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });