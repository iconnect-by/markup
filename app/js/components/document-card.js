'use strict';

angular.module('iConnectApp')
    .component('documentCard', {
        templateUrl: '/views/template/document-card.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });