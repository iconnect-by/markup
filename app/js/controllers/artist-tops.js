'use strict';

angular.module('iConnectApp')
    .controller('ArtistTopsController', ['$scope', '$state', 'artistFactory', 'organizationFactory', function($scope, $state, artistFactory, organizationFactory) {
        $scope.artists = artistFactory.getArtists();
        $scope.newArtists = artistFactory.getNewArtists();
        $scope.genres = "Dj's";
        $scope.allArtist = artistFactory.getAllArtist();
        $scope.artistList = [];

        $scope.openArtist = function (genres) {
            $scope.artisGenres = genres;
            $scope.artistList.push( artistFactory.getArtistByType(genres));
            $state.go('app.artist-open');
        };

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