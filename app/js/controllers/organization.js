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

    }]);