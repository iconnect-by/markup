'use strict';

angular.module('iConnectApp')
    .controller('OrganizationController', ['$scope' , 'organizationFactory', 'artistFactory', 'ngDialog',  function($scope, organizationFactory, artistFactory, ngDialog) {
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

        $scope.showCalendarEvents = function (e) {
            e.preventDefault();

            $('.col').removeClass('selected');
            $(e.target).closest('.col').addClass('selected');

            console.log('Shows in right sidebar events.');
        };

        $scope.setBusiness = function (e) {
            e.preventDefault();

            if ($(e.target).hasClass('col')) {
                ngDialog.open({
                    template: $(e.target).hasClass('locked') ? '../../views/template/dialog-business-free.html' : '../../views/template/dialog-business-busy.html',
                    className: 'ngdialog-theme-default',
                    plain: false
                    //controller: 'SomeController'
                });
            }
        };

    }]);