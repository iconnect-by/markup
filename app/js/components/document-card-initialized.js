'use strict';

angular.module('iConnectApp')
    .component('documentCardInitialized', {
        templateUrl: '/views/template/document-card-initialized.html',
        bindings: {
            data: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });