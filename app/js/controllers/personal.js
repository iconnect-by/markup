'use strict';

angular.module('iConnectApp')
    .controller('PersonalController', ['$scope', '$timeout', 'ngDialog', function($scope, $timeout, ngDialog) {
        $scope.divShow = "allMedia";
        $scope.locationEditable = false;
        $scope.isEditMusic = false;

        $scope.imageNum = 0;
        $scope.countImages = 0;
        // $scope.loadImage = true;


        /* SET DATES FOR SIDEBAR CALENDAR */
        $scope.sidebarDtOptions = {
            customClass: getDayClass,
            showWeeks: false,
            formatDayTitle: 'MMM yyyy'
        };

        var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
            afterTomorrow.setDate(afterTomorrow.getDate() + 1);
        var afterAfterTomorrow = new Date(tomorrow);
            afterAfterTomorrow.setDate(afterAfterTomorrow.getDate() + 2);
        var afterAfterAfterTomorrow = new Date(tomorrow);
            afterAfterAfterTomorrow.setDate(afterAfterAfterTomorrow.getDate() + 2);
        var customDate = new Date(tomorrow);
            customDate.setDate(customDate.getDate() + 6);

        $scope.events = [
            //Tue Sep 12 2017 17:47:17 GMT+0300 (+03)
            {
                date: tomorrow,
                status: 'busy first'
            },
            {
                date: afterTomorrow,
                status: 'busy'
            },
            {
                date: afterTomorrow,
                status: 'busy'
            },
            {
                date: afterAfterAfterTomorrow,
                status: 'busy'
            },
            {
                date: 'Tue Sep 15 2017 17:47:17 GMT+0300 (+03)',
                status: 'busy'
            },
            {
                date: 'Tue Sep 16 2017 17:47:17 GMT+0300 (+03)',
                status: 'busy'
            },
            {
                date: 'Tue Sep 17 2017 17:47:17 GMT+0300 (+03)',
                status: 'busy last'
            },
            {
                date: customDate,
                status: 'booked'
            },
            {
                date: 'Tue Sep 20 2017 17:47:17 GMT+0300 (+03)',
                status: 'booked'
            },
            {
                date: 'Tue Sep 21 2017 17:47:17 GMT+0300 (+03)',
                status: 'booked'
            }

        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
        /*-- SET DATES FOR SIDEBAR CALENDAR */

        $scope.showSocialDialog = function (e) {
            e.preventDefault();

            ngDialog.open({
                template: '../../views/template/dialog-social.html',
                className: 'ngdialog-theme-default',
                plain: false
                //controller: 'SomeController'
            });
        };

        $scope.showPhoto = function (e, id) {
            e.preventDefault();

            var body = $('body');
            var overlay = $('.overlay');
            var overlayOpen = $('[data-id="' + id + '"]').hasClass('open-overlay');
            var imgSrc = $('.vbnx-image').find('.image-item');

            overlay.attr('aria-hidden', false);
            body.addClass('noscroll');
            overlay.scrollTop = 0;

            $scope.countImages = $scope.galleryImages.length;
            $scope.imageNum = id;

            // $scope.loadImage = false;
            imgSrc.attr('src', $scope.galleryImages[id].src);


            // $timeout(function(id) {
            //     $scope.loadImage = false;
            //     imgSrc.attr('src', $scope.galleryImages[id].src);
            // }, 1000, $scope.imageNum);
        };

        $scope.photoBack = function (e) {
            e.preventDefault();

            if ($(e.target).hasClass('overlay') || $(e.target).hasClass('photo-close')) {
                var body = $('body');
                var overlay = $('.overlay');
                var overlayOpen = $(e.target).hasClass('open-overlay');

                overlay.attr('aria-hidden', true);
                body.removeClass('noscroll');
            }
        };

        $scope.showCloseText = function (e, id) {
            e.preventDefault();

            $('[data-id="' + id + '"]').toggleClass('text-collapsed');
        };

        $scope.slideToRight = function (e, id) {
            e.preventDefault(id);

            var imgSrc = $('.vbnx-image').find('.image-item');

            if ($scope.galleryImages[id + 1]) {
                imgSrc.attr('src', $scope.galleryImages[id + 1].src);
                $scope.imageNum = id + 1;
            }
        };

        $scope.slideToLeft = function (e, id) {
            e.preventDefault();

            var imgSrc = $('.vbnx-image').find('.image-item');

            if ($scope.galleryImages[id - 1]) {
                imgSrc.attr('src', $scope.galleryImages[id - 1].src);
                $scope.imageNum = id - 1;
            }
        };

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

        $scope.galleryImages = [
            {
                id: 0,
                src: '../../images/gallery-0.jpg',
                width: '749',
                height: '910'
            },
            {
                id: 1,
                src: '../../images/gallery-1.jpg',
                width: '540',
                height: '383'
            },
            {
                id: 2,
                src: '../../images/gallery-2.jpg',
                width: '1440',
                height: '900'
            },
            {
                id: 3,
                src: '../../images/gallery-3.jpg',
                width: '2048',
                height: '1360'
            },
            {
                id: 4,
                src: '../../images/gallery-4.jpg',
                width: '604',
                height: '604'
            },
            {
                id: 5,
                src: '../../images/gallery-5.jpg',
                width: '600',
                height: '734'
            },
            {
                id: 6,
                src: '../../images/gallery-6.jpg',
                width: '542',
                height: '542'
            },
            {
                id: 7,
                src: '../../images/gallery-7.jpg',
                width: '602',
                height: '295'
            },
            {
                id: 8,
                src: '../../images/Asmundur_at_his_Craft_in_Iceland_at_Sunset.jpg',
                width: '602',
                height: '295'
            },
            {
                id: 9,
                src: '../../images/MghPv9G13oM.jpg',
                width: '602',
                height: '295'
            },
            {
                id: 10,
                src: '../../images/file000267747089.jpg',
                width: '602',
                height: '295'
            },
            {
                id: 11,
                src: '../../images/file0002056219390.jpg',
                width: '602',
                height: '295'
            },
            {
                id: 12,
                src: '../../images/file0002056219390.jpg',
                width: '602',
                height: '295'
            }
        ]

    }]);