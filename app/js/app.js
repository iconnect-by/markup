'use strict';

angular.module('iConnectApp', ['ui.router', 'ngResource', 'ui.calendar'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'content': {
                        templateUrl: 'views/artist/artist-tops.html',
                        controller: 'ArtistTopsController'
                    }
                    // 'footer': {
                    //     templateUrl: 'views/footer.html',
                    // }
                }
            })

        // route for the events page
            .state('app.events', {
                url: 'events',
                views: {
                    'content@': {
                        templateUrl: 'views/events.html',
                        controller: 'EventsController'
                    }
                }
            })

        // route for the artist-open page
            .state('app.artist-open', {
                url: 'artist-open',
                views: {
                    'content@': {
                        templateUrl: 'views/artist/artist-open.html',
                        controller: 'ArtistTopsController'
                    }
                }
            })

        // route for the organization page
            .state('app.organization', {
                url: 'organization',
                views: {
                    'content@': {
                        templateUrl: 'views/organizations.html',
                        controller: 'OrganizationController'
                    }
                }
            })

        // route for the login page
            .state('app.login', {
                url: 'login',
                views: {
                    'content@': {
                        templateUrl: 'views/login/login.html',
                        controller: 'RegistrationController'
                    }
                }
            })

        // route for the verification page
            .state('app.verification', {
                url: 'verification',
                views: {
                    'content@': {
                        templateUrl: 'views/login/verification.html',
                        controller: 'RegistrationController'
                    }
                }
            })
        // route for the cabinet page
            .state('app.cabinet', {
                url: 'cabinet',
                views: {
                    'content@': {
                        templateUrl: 'views/login/cabinet.html',
                        controller: 'RegistrationController'
                    }
                }
            })

        // route for the personal artist page
            .state('app.personal-artist', {
                url: 'personal-artist',
                views: {
                    'content@': {
                        templateUrl: 'views/personal/artist.html',
                        controller: 'PersonalController'
                    }
                }
            })
        // route for the personal organization page
            .state('app.personal-organization', {
                url: 'personal-organization',
                views: {
                    'content@': {
                        templateUrl: 'views/personal/organization.html',
                        controller: 'PersonalController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    })
;