'use strict';

angular.module('iConnectApp')
    .component('miniProfileNew', {
        templateUrl: 'views/template/mini-profile-new.html',
        bindings: {
            data: "<",
            showIndex: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });