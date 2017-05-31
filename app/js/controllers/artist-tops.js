'use strict';

angular.module('iConnectApp')
    .controller('ArtistTopsController', ['$scope', '$state', 'artistFactory', function($scope, $state, artistFactory) {
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

    }]);