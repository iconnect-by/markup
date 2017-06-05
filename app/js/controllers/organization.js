'use strict';

angular.module('iConnectApp')
    .controller('OrganizationController', ['$scope' , 'organizationFactory', 'artistFactory', function($scope, organizationFactory, artistFactory) {
        $scope.organizationList = organizationFactory.getOrganizationList();
        $scope.newArtists = artistFactory.getNewArtists();
    }]);