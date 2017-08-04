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
                style: "Singer",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 1,
                firstName: "John",
                lastName: "Cena",
                country: "America",
                style: "Singer",
                description: "The Cenation Leader, The Champ, The Face of the WWE, The Hustle Loyalty & Respect Soldier, The Chain Gang Soldier, The Doctor of Thuganomics, Mr. Money in the Bank, Mr. P, The Prototype.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 2,
                firstName: "Lana",
                lastName: "Del Rey",
                country: "Belarus",
                style: "Singer",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 3,
                firstName: "Nicole",
                lastName: "Pearson",
                country: "Belarus",
                style: "Singer",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 4,
                firstName: "Nicole",
                lastName: "Pearson",
                country: "Belarus",
                style: "Singer",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 5,
                firstName: "Nicole",
                lastName: "Pearson",
                country: "Belarus",
                style: "Singer",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            }];
        $scope.organizationList = [
            {
                id: 0,
                title: "Sura Records",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 1,
                title: "Pary Rai",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            }
        ];
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
                    }
                ]

            }
        ];

        $scope.changeInformPerson = [
           [
               {
                   id: 0,
                   name: 'Dj',
                   icon: {
                       on: '../../images/create-dj-icon-filled.svg',
                       off: '../../images/create-dj-icon.svg'
                   },
                   literal: 'fa fa-pied-piper-alt'
               },
               {
                   id: 1,
                   name: 'Musician',
                   icon: {
                       on: '../../images/create-musician-icon-filled.svg',
                       off: '../../images/create-musician-icon.svg'
                   },
                   literal: 'fa fa-user-secret'
               },
               {
                   id: 2,
                   name: 'Vocalist',
                   icon: {
                       on: '../../images/create-vocalist-icon-filled.svg',
                       off: '../../images/create-vocalist-icon.svg'
                   },
                   literal: 'fa fa-users'
               },
               {
                   id: 3,
                   name: 'MC',
                   icon: {
                       on: '../../images/create-mc-icon-filled.svg',
                       off: '../../images/create-mc-icon.svg'
                   },
                   literal: 'fa fa-star'
               }
           ],
            [
                {
                    id: 4,
                    name: 'Promoter',
                    icon: {
                        on: '../../images/create-promouter-icon-filled.svg',
                        off: '../../images/create-promouter-icon.svg'
                    },
                    literal: 'fa fa-microphone'
                },
                {
                    id: 5,
                    name: 'Event Leader',
                    icon: {
                        on: '../../images/create-eleader-icon-filled.svg',
                        off: '../../images/create-eleader-icon.svg'
                    },
                    literal: 'fa fa-diamond'
                },
                {
                    id: 6,
                    name: 'Musical group',
                    icon: {
                        on: '../../images/create-musical-group-icon-filled.svg',
                        off: '../../images/create-musical-group-icon.svg'
                    },
                    literal: 'fa fa-podcast'
                },
                {
                    id: 7,
                    name: 'Dancer',
                    icon: {
                        on: '../../images/create-dancer-icon-filled.svg',
                        off: '../../images/create-dancer-icon.svg'
                    },
                    literal: 'fa fa-hand-peace-o'
                }
            ]
        ];

        $scope.changeInformOrganization = [
            [
                {
                    id: 0,
                    name: 'NightClub',
                    icon: {
                        on: '../../images/create-dj-icon-filled.svg',
                        off: '../../images/create-dj-icon.svg'
                    },
                    literal: 'fa fa-pied-piper-alt'
                },
                {
                    id: 1,
                    name: 'Wedding',
                    icon: {
                        on: '../../images/create-musician-icon-filled.svg',
                        off: '../../images/create-musician-icon.svg'
                    },
                    literal: 'fa fa-user-secret'
                },
                {
                    id: 2,
                    name: 'Birthday',
                    icon: {
                        on: '../../images/create-vocalist-icon-filled.svg',
                        off: '../../images/create-vocalist-icon.svg'
                    },
                    literal: 'fa fa-users'
                },
                {
                    id: 3,
                    name: 'Festival',
                    icon: {
                        on: '../../images/create-mc-icon-filled.svg',
                        off: '../../images/create-mc-icon.svg'
                    },
                    literal: 'fa fa-star'
                },
            ],
          [
              {
                  id: 4,
                  name: 'Daytime Party',
                  icon: {
                      on: '../../images/create-promouter-icon-filled.svg',
                      off: '../../images/create-promouter-icon.svg'
                  },
                  literal: 'fa fa-microphone'
              },
              {
                  id: 5,
                  name: 'Private Party',
                  icon: {
                      on: '../../images/create-eleader-icon-filled.svg',
                      off: '../../images/create-eleader-icon.svg'
                  },
                  literal: 'fa fa-diamond'
              },
              {
                  id: 6,
                  name: 'Underground Party',
                  icon: {
                      on: '../../images/create-musical-group-icon-filled.svg',
                      off: '../../images/create-musical-group-icon.svg'
                  },
                  literal: 'fa fa-podcast'
              },
              {
                  id: 7,
                  name: 'Corporate Event',
                  icon: {
                      on: '../../images/create-dancer-icon-filled.svg',
                      off: '../../images/create-dancer-icon.svg'
                  },
                  literal: 'fa fa-hand-peace-o'
              }
          ]
        ];

        $scope.events = [
            [
                {
                    id: 0,
                    name: 'Concert or Performance',
                    icon: {
                        on: '../../images/create-dj-icon-filled.svg',
                        off: '../../images/create-dj-icon.svg'
                    },
                    literal: 'fa fa-pied-piper-alt'
                },
                {
                    id: 1,
                    name: 'Festival or Fair',
                    icon: {
                        on: '../../images/create-musician-icon-filled.svg',
                        off: '../../images/create-musician-icon.svg'
                    },
                    literal: 'fa fa-user-secret'
                },
                {
                    id: 2,
                    name: 'Party or Social Gathering',
                    icon: {
                        on: '../../images/create-vocalist-icon-filled.svg',
                        off: '../../images/create-vocalist-icon.svg'
                    },
                    literal: 'fa fa-users'
                },
                {
                    id: 3,
                    name: 'Tradeshow or Consumer Show',
                    icon: {
                        on: '../../images/create-mc-icon-filled.svg',
                        off: '../../images/create-mc-icon.svg'
                    },
                    literal: 'fa fa-star'
                }
            ],
            [
                {
                    id: 4,
                    name: 'Class, Training or Workshop',
                    icon: {
                        on: '../../images/create-promouter-icon-filled.svg',
                        off: '../../images/create-promouter-icon.svg'
                    },
                    literal: 'fa fa-microphone'
                },
                {
                    id: 5,
                    name: 'Appearance or Singing',
                    icon: {
                        on: '../../images/create-eleader-icon-filled.svg',
                        off: '../../images/create-eleader-icon.svg'
                    },
                    literal: 'fa fa-diamond'
                },
                {
                    id: 6,
                    name: 'Tour',
                    icon: {
                        on: '../../images/create-musical-group-icon-filled.svg',
                        off: '../../images/create-musical-group-icon.svg'
                    },
                    literal: 'fa fa-podcast'
                },
                {
                    id: 7,
                    name: 'Other',
                    icon: {
                        on: '../../images/create-dancer-icon-filled.svg',
                        off: '../../images/create-dancer-icon.svg'
                    },
                    literal: 'fa fa-hand-peace-o'
                }
            ]
        ];

        $scope.icDocuments = [
            {
                id: 0,
                title: 'Vinyl Banners',
                date: '12 Nov 2016, 22:00 - 05:00'
            },
            {
                id: 1,
                title: 'Truck Side Advertising',
                date: '12 Nov 2016, 22:00 - 05:00'
            },
            {
                id: 2,
                title: 'Converter Ipod Video',
                date: '12 Nov 2016, 22:00 - 05:00'
            },
            {
                id: 3,
                title: 'Capt N Salsa',
                date: '12 Nov 2016, 22:00 - 05:00'
            },
            {
                id: 4,
                title: 'Is Lasik Right For Me',
                date: '12 Nov 2016, 22:00 - 05:00'
            },
            {
                id: 5,
                title: 'Barbeque Techniques',
                date: '12 Nov 2016, 22:00 - 05:00'
            },
            {
                id: 6,
                title: 'When The Morning Dawns',
                date: '12 Nov 2016, 22:00 - 05:00'
            },
            // {
            //     id: 7,
            //     title: 'How To Set Intentions',
            //     date: '12 Nov 2016, 22:00 - 05:00'
            // },
        ];

        $scope.getIcon = function (data) {
            console.log(data);
            if (data.icon) {
                if (data.isChecked) {
                    return data.icon.on;
                } else {
                    return data.icon.off;
                }
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