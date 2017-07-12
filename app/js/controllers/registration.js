'use strict';

angular.module('iConnectApp')
    .controller('RegistrationController', ['$scope', '$state', 'loginFactory', 'artistFactory', function ($scope, $state, loginFactory, artistFactory) {
        $scope.Person = {};
        $scope.artistList = [
            {
                id: 0,
                firstName: "Nicole",
                lastName: "Pearson",
                country: "Belarus",
                style: "Signer",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            },
            {
                id: 1,
                firstName: "Nicole",
                lastName: "Pearson",
                country: "Belarus",
                style: "Signer",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            }];
        $scope.organizationList = [
            {
                id: 0,
                title: "Sura Records",
                location: "Belarus",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            },
            {
                id: 1,
                title: "Pary Rai",
                location: "Belarus",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            }
        ];
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
        ];

        $scope.changeInformPerson = [
            {
                id: 0,
                name: 'Dj',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 1,
                name: 'Musician',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 2,
                name: 'Vocalist',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 3,
                name: 'MC',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 4,
                name: 'Promoter',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 5,
                name: 'Event Leader',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 6,
                name: 'Musical group',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 7,
                name: 'Dancer',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            }
        ];
        $scope.changeInformOrganization = [
            {
                id: 0,
                name: 'NightClub',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 1,
                name: 'Wedding',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 2,
                name: 'Birthday',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 3,
                name: 'Festival',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 4,
                name: 'Daytime Party',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 5,
                name: 'Private Party',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 6,
                name: 'Underground Party',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            },
            {
                id: 7,
                name: 'Corporate Event',
                icon: {
                    on: 'images/Add_full@2x.png',
                    off: 'images/Add_small@2x.png'
                }
            }
        ];

        $scope.getIcon = function (data) {
            if (data.icon) {
                if (data.isChecked) return data.icon.on;
                else return data.icon.off;
            }
        };

        function gotoPersonalPage() {
            if ($scope.Person.type === 'artist') {
                $state.go('app.personal-artist');
            } else if ($scope.Person.type === 'organization') {
                $state.go('app.personal-organization');
            }
        }

        $scope.login = function () {
            // get person
            $scope.Person = {};
            $scope.Person = loginFactory.getPerson($scope.user.email);
            gotoPersonalPage();
        };

        $scope.register = function () {
            // create new Person
            $scope.Person = {};
            $scope.Person.email = $scope.userReg.email;
            $scope.Person.name = $scope.userReg.email;
            $scope.Person.password = $scope.userReg.password;
            $scope.Person.type = 'artist';
            console.log($scope.Person);
            $state.go('app.verification');
        };

        $scope.verification = function () {
            // send sms code

            if (true) {
                // save new Person
                gotoPersonalPage();
            }
        }

    }]);