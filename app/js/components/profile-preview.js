'use strict';

angular.module('iConnectApp')
    .component('profilePreview', {
        templateUrl: 'views/template/profile-preview.html',
        bindings: {
            data: "<",
            avatarTypeClass: "<"
        },
        controller: ['$scope', function ($scope) {
            // console.log(this);
        }]
    });