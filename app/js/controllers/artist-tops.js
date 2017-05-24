'use strict';

angular.module('iConnectApp')
    .controller('ArtistTopsController', ['$scope', '$state', 'artistFactory', function($scope, $state, artistFactory) {
        $scope.artists = artistFactory.getArtists();
        $scope.newArtists = artistFactory.getNewArtists();
        $scope.type ="";
        $scope.allArtist = [];

        $scope.add = function (type) {
            $scope.type = type;
            $scope.allArtist.push( artistFactory.getArtistByType(type));
            $state.go('app.allArtits');

        };

    }]);