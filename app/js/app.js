'use strict';

// angular.module('iConnectApp', ['ui.router', 'ngResource', 'ui.calendar', 'ui.select', 'ngSanitize', 'ngDialog'])
angular.module('iConnectApp', ['ui.router', 'ngDialog'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                        // controller: 'HeaderController'
                    },
                    'content': {
                        templateUrl: 'views/temp.html'
                    }
                    // 'footer': {
                    //     templateUrl: 'views/footer.html',
                    // }
                }
            })

            .state('app.artist-tops', {
                url: 'artist-tops',
                views: {
                    'content@': {
                        templateUrl: 'views/artist-tops.html',
                        controller: 'ArtistTopsController'
                    }
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

            .state('app.event-page', {
                url: 'personal-event',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/event/event-page.html',
                        controller: 'EventsController'
                    }
                }
            })

            // route for the create-event page
            .state('app.create-event', {
                url: 'create-event',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/event/create-event.html',
                        controller: 'RegistrationController'
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
                // data: {
                //     isHeaderTransparent: true
                // },
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
            // route for the create-artist page
            .state('app.create-artist', {
                url: 'create-artist',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/artist/create-artist.html',
                        controller: 'RegistrationController'
                    }
                }
            })
            // route for the create-organization page
            .state('app.create-organization', {
                url: 'create-organization',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/oranization/create-organization.html',
                        controller: 'RegistrationController'
                    }
                }
            })

            // route for the personal artist page
            .state('app.personal-artist', {
                url: 'personal-artist',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/artist/artist.html',
                        controller: 'PersonalController'
                    }
                }
            })
            // route for the personal artist config page
            .state('app.personal-artist.config', {
                url: '/config',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/artist/artist-config.html',
                        controller: 'PersonalController'
                    }
                }
            })
            // route for the personal organization page
            .state('app.personal-organization', {
                url: 'personal-organization',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/oranization/organization.html',
                        controller: 'PersonalController'
                    }
                }
            })
            // route for the personal organization page
            .state('app.personal-organization.config', {
                url: '/config',
                views: {
                    'content@': {
                        templateUrl: 'views/profile/oranization/organization-config.html',
                        controller: 'PersonalController'
                    }
                }
            })
            .state('app.terms-of-use', {
                url: 'terms-of-use',
                views: {
                    'content@': {
                        templateUrl: 'views/login/terms-of-use.html'
                    }
                }
            })
            .state('app.registration-complete', {
                url: 'registration-complete',
                views: {
                    'content@': {
                        templateUrl: 'views/registration/registration-complete.html'
                    }
                }
            })

            // Commmon elements
            .state('app.common', {
                url: 'common',
                views: {
                    'content@': {
                        templateUrl: 'views/common.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    })
;