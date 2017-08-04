'use strict';

angular.module('iConnectApp')
    .component('miniProfilePreview', {
        templateUrl: 'views/template/mini-profile-preview.html',
        bindings: {
            data: "<",
            showIndex: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });