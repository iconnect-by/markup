'use strict';

angular.module('iConnectApp')
    .component('notificationCard', {
        templateUrl: '/views/template/notification-card.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });