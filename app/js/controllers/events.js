'use strict';

angular.module('iConnectApp')
    .controller('EventsController', ['$scope', 'ngDialog', function ($scope, ngDialog) {

        $scope.iTimePicker = function (e) {
            e.preventDefault();
            ngDialog.open({ template: 'views/template/timepicker.html', className: 'ngdialog-theme-default' });
        };

        $scope.iDatePicker = function (e) {
            e.preventDefault();
            ngDialog.open({ template: 'views/template/datepicker.html', className: 'ngdialog-theme-default' });
        };

        $scope.locationPopUp = function (e) {
            e.preventDefault();
            ngDialog.open({ template: 'views/template/location.html', className: 'ngdialog-theme-default', width: '40%' });
        };

        $scope.eventsArt = [
            {
                id: 0,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: '<p>A purpose is the eternal condition for success.Every former smoker can tell you just how hard it is to stop smoking cigarettes. </p> <p>A purpose is the eternal condition for success.Every former smoker can tell you just how hard it is to stop smoking cigarettes. </p> <p>A purpose is the eternal condition for success.Every former smoker can tell you just how hard it is to stop smoking cigarettes. </p>',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 1,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 2,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 3,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 4,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 5,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 6,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            },
            {
                id: 7,
                title: 'Romantic Ballads',
                imgUrl: '../../images/placeholder.svg',
                eventText: 'Read, out with friends, listen to music, draw and learn new things.',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder.svg'
                    }
                ]

            }
        ];

        $scope.edit = function (e) {
            e.preventDefault();

            if (true === $scope.locationEditable) {
                $scope.locationEditable = false;
            } else {
                $scope.locationEditable = true;
            }

        };

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

        $scope.gotoArtist = function(id){
            if(id == 0){
                //
            } else {

            }
        }
    }]);