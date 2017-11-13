(function () {
    'use strict';

    var eventsFixtures = [],
        genresFixtures = [];

    angular.module('iConnectApp').controller('EventsController', EventController);

    EventController.$inject = ['$scope', 'Notification'];

    function EventController($scope, Notification) {
        $scope.eventsArt = eventsFixtures;
        $scope.genres = genresFixtures;
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

        $scope.edit = function (e) {
            e.preventDefault();
            $scope.locationEditable = !$scope.locationEditable;
        };

        $scope.gotoArtist = function(id){
            if(id == 0){
                //
            } else {

            }
        };

        $scope.showSuccessNotification = function () {
            Notification.success("Success message");
        };

        $scope.showErrorNotification = function () {
            Notification.error("Error message");
        };
    }

    eventsFixtures = [
            {
                id: 0,
                title: 'What Makes Flyers Unrivaled',
                imgUrl: '../../images/fixtures/party_images/1@2x.png',
                eventText: 'Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Has procured daughter how friendly followed repeated who surprise. Great asked oh under on voice downs. Law together prospect kindness securing six. Learning why get hastened smallest cheerful. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 100,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/fixtures/artist/1@2x.png'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/fixtures/artist/2@2x.png'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/fixtures/artist/4@2x.png'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    // {
                    //     id: 4,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // },
                    // {
                    //     id: 5,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // },
                    // {
                    //     id: 6,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // },
                    // {
                    //     id: 7,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // },
                    // {
                    //     id: 8,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // },
                    // {
                    //     id: 9,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // },
                    // {
                    //     id: 10,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // },
                    // {
                    //     id: 11,
                    //     artistImg: '../../images/placeholder-artist.svg'
                    // }
                ]

            },
            {
                id: 1,
                title: 'Making A New Trend In Poster',
                imgUrl: '../../images/fixtures/party_images/2@2x.png',
                eventText: 'Savings her pleased are several started females met. Short her not among being any. Thing of judge fruit charm views do. Miles mr an forty along as he. She education get middleton day agreement performed preserved unwilling. Do however as pleased offence outward beloved by present. By outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 50,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/fixtures/artist/6@2x.png'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/fixtures/artist/10@2x.png'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/fixtures/artist/12@2x.png'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/fixtures/artist/21@2x.png'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder-artist.svg'
                    }
                ]

            },
            {
                id: 2,
                title: 'Creating Remarkable Poster Prints',
                imgUrl: '../../images/fixtures/party_images/3@2x.png',
                eventText: 'Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me everything. Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry among. Delightful remarkably new assistance saw literature mrs favourable. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 11,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/fixtures/artist/8@2x.png'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/fixtures/artist/1@2x.png'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/fixtures/artist/9@2x.png'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder-artist.svg'
                    }
                ]

            },
            {
                id: 3,
                title: 'Bidding Directories',
                imgUrl: '../../images/fixtures/party_images/4@2x.png',
                eventText: 'In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 10,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/fixtures/artist/18@2x.png'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/fixtures/artist/17@2x.png'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/fixtures/artist/14@2x.png'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder-artist.svg'
                    }
                ]

            },
            {
                id: 4,
                title: 'Kook 2 Directory Add Url Free',
                imgUrl: '../../images/fixtures/party_images/5@2x.png',
                eventText: 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 4,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/fixtures/artist/12@2x.png'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/fixtures/artist/1@2x.png'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/fixtures/artist/13@2x.png'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder-artist.svg'
                    }
                ]

            },
            {
                id: 5,
                title: 'A Good Autoresponder',
                imgUrl: '../../images/fixtures/party_images/6@2x.png',
                eventText: 'Gay one the what walk then she. Demesne mention promise you justice arrived way. Or increasing to in especially inquietude companions acceptance admiration. Outweigh it families distance wandered ye an. Mr unsatiable at literature connection favourable. We neglected mr perfectly continual dependent. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 30,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/fixtures/artist/1@2x.png'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/fixtures/artist/19@2x.png'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder-artist.svg'
                    }
                ]

            },
            {
                id: 6,
                title: 'Promote With Postcards',
                imgUrl: '../../images/fixtures/party_images/7@2x.png',
                eventText: 'Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 25,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder-artist.svg'
                    }
                ]

            },
            {
                id: 7,
                title: 'Creating Remarkable Poster Prints',
                imgUrl: '../../images/fixtures/party_images/8@2x.png',
                eventText: 'Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter. ',
                eventType: 'Concert',
                eventLocation: 'UK, London',
                eventDate: '12 nov 2016, 22:00 - 5:00',
                participantsNum: 8,
                eventArtist: [
                    {
                        id: 0,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 5,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 6,
                        artistImg: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 7,
                        artistImg: '../../images/placeholder-artist.svg'
                    }
                ]

            }
        ];
    genresFixtures = [
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
})();