'use strict';

angular.module('iConnectApp')
    .controller('OrganizationController', ['$scope' , 'organizationFactory', 'artistFactory', function($scope, organizationFactory, artistFactory) {
        $scope.organizationList = organizationFactory.getOrganizationList();
        $scope.newArtists = artistFactory.getNewArtists();

        $scope.dateNow = new Date();

        $scope.DatePickerOptions = {
            showWeeks: false,
            formatDayTitle: 'MMM yyyy'
            // minDate: $scope.dte <--- opt for range
        };
        $scope.DatePickerEndOptions = {
            showWeeks: false,
            formatDayTitle: 'MMM yyyy'
            // minDate: $scope.dt <--- opt for range
        };

        $scope.locations = organizationFactory.getLocationList();
        $scope.types = organizationFactory.getTypesList();

    }]);