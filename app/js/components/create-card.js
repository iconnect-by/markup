'use strict';

angular.module('iConnectApp')
    .component('createCard', {
        templateUrl: '/views/template/create-card.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });