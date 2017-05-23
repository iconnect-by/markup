'use strict';

angular.module('iConnectApp')
    .controller('ArtistTopsController', ['$scope', 'artistFactory', function($scope, artistFactory) {
        $scope.artists = artistFactory.getArtists();
        $scope.newArtists = artistFactory.getNewArtists();

    }]);