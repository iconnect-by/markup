'use strict';

angular.module('iConnectApp')
    .controller('OrganizationController', ['$scope' , 'organizationFactory', function($scope, organizationFactory) {
        $scope.organizationList = organizationFactory.getOrganizationList();

    }]);