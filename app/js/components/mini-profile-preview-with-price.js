'use strict';

angular.module('iConnectApp')
    .component('miniProfilePreviewPrice', {
        templateUrl: 'views/template/mini-profile-preview-with-price.html',
        bindings: {
            data: "<",
            showIndex: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });