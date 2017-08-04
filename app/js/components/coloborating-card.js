'use strict';

angular.module('iConnectApp')
    .component('coloboratingCard', {
        templateUrl: '/views/template/coloborating-card.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });