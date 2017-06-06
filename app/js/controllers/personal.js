'use strict';

angular.module('iConnectApp')
    .controller('PersonalController', ['$scope', function($scope) {
        $scope.divShow = "allMedia";
        $scope.showMedia = function(arg) {
            $scope.divShow = arg;
        };

        $scope.itunesSelect = {
            "Itunes Festival":[1,2,3],
            "Itunes Show":[1,2,3]
        };

        $scope.eventSources = [];
        $scope.uiConfig = {
            calendar:{
                height: 'auto',
                editable: true,
                header:{
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                eventClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

        $scope.eventsArt = [
            {
                id: 0,
                title: 'Romantic Ballads',
                imgUrl: 'http://placehold.it/150x200',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 1,
                        artistImg: 'http://placehold.it/60x60'
                    },
                    {
                        id: 1,
                        artistImg: 'http://placehold.it/60x60'
                    },
                    {
                        id: 0,
                        artistImg: 'images/Add_small@2x.png'
                    },
                    {
                        id: 0,
                        artistImg: 'images/Add_small@2x.png'
                    },
                    {
                        id: 0,
                        artistImg: 'images/Add_small@2x.png'
                    }
                ]

            },
            {
                id: 0,
                title: 'Romantic Ballads',
                imgUrl: 'http://placehold.it/150x200',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 1,
                        artistImg: 'http://placehold.it/60x60'
                    },
                    {
                        id: 1,
                        artistImg: 'http://placehold.it/60x60'
                    },
                    {
                        id: 1,
                        artistImg: 'http://placehold.it/60x60'
                    },
                    {
                        id: 1,
                        artistImg: 'http://placehold.it/60x60'
                    },
                    {
                        id: 0,
                        artistImg: 'images/Add_small@2x.png'
                    },
                    {
                        id: 0,
                        artistImg: 'images/Add_small@2x.png'
                    },
                    {
                        id: 0,
                        artistImg: 'images/Add_small@2x.png'
                    },
                    {
                        id: 0,
                        artistImg: 'images/Add_small@2x.png'
                    }
                ]

            }
            ]

    }]);