'use strict';

angular.module('iConnectApp')
    .controller('PersonalController', ['$scope', function($scope) {
        $scope.divShow = "allMedia";
        $scope.locationEditable = false;
        $scope.isEditMusic = false;

        $scope.showMedia = function(arg, e) {
            e.preventDefault();
            $scope.divShow = arg;
        };

        $scope.itunesSelect = {
            "Itunes Festival":[1,2,3],
            "Itunes Show":[1,2,3]
        };

        $scope.edit = function (e) {
            e.preventDefault();

            $scope.locationEditable = true !== $scope.locationEditable
            // if (true === $scope.locationEditable) {
            //     $scope.locationEditable = false;
            // } else {
            //     $scope.locationEditable = true;
            // }

        };

        $scope.actionEditMusic = function (e) {
            e.preventDefault();

            $scope.isEditMusic = true !== $scope.isEditMusic;
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
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 0,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 0,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    },
                    {
                        id: 0,
                        artistImg: './../images/placeholder.svg'
                    }
                ]

            }
        ];

        $scope.organizationRole = ['POP', 'jAZZ', 'Blues', 'Comedy', 'Country', 'Folk', 'Hip Hop', 'Rock', 'Electronic', 'R&B and Soul'];
        $scope.genres = [
            {
                title: 'POP',
                status: 'active'
            },
            {
                title: 'jAZZ',
                status: ''
            },
            {
                title: 'Blues',
                status: 'active'
            },
            {
                title: 'Comedy',
                status: 'active'
            },
            {
                title: 'Country',
                status: ''
            },
            {
                title: 'Folk',
                status: 'active'
            },
            {
                title: 'Hip Hop',
                status: 'active'
            }
        ];

        $scope.artistRole = [
            {
                title: 'Singer',
                status: 'active'
            },
            {
                title: 'Dj',
                status: ''
            },
            {
                title: 'Dancer',
                status: 'active'
            },
            {
                title: 'Vocalist',
                status: 'active'
            },
            {
                title: 'Musician',
                status: ''
            }
        ];

        $scope.colloborateArts = [
            {
                id: 0,
                firstName: "Nicole",
                lastName: "Pearson",
                country: "Belarus",
                style: "Singer",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 1,
                firstName: "John",
                lastName: "Dou",
                country: "UK",
                style: "Singer",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 2,
                firstName: "David",
                lastName: "Mathew",
                country: "USA",
                style: "Singer",
                photo: "../../images/placeholder.svg"
            }
        ];
    }]);