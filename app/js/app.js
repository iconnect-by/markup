'use strict';

angular.module('iConnectApp', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                    },
                    'content': {
                        templateUrl: 'views/artist-tops.html',
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

        // route for the organization page
            .state('app.organization', {
                url: 'organization',
                views: {
                    'content@': {
                        templateUrl: 'views/organization.html',
                        controller: 'OrganizationController'
                    }
                }
            })

        // route for the login page
            .state('app.login', {
                url: 'login',
                views: {
                    'content@': {
                        templateUrl: 'views/login.html',
                        controller: 'RegistrationController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    })
;