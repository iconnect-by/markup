'use strict';

angular.module('iConnectApp')
    .service('organizationFactory', function () {
        var organizationList = [
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
            },
            {
                id: 2,
                title: "DRS Promotion",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 3,
                title: "Sura Records",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 4,
                title: "DRS Promotion",
                location: "Netherlands",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            },
            {
                id: 5,
                title: "Pary Rai",
                location: "Poland",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/placeholder.svg"
            }
        ];

        this.getOrganizationList = function(){
            return organizationList;
        };

        var locationList = [
            {
                id: 0,
                country: 'USA',
                city: 'Washington',
                address: '1600 Pennsylvania Avenue NW'
            },
            {
                id: 0,
                country: 'Belarus',
                city: 'Minsk',
                address: 'Lenina str. 36'
            },
            {
                id: 0,
                country: 'Russia',
                city: 'Moscow',
                address: '1st Street SE'
            },
            {
                id: 0,
                country: 'Italy',
                city: 'Rome',
                address: '123 Maple Street'
            },
            {
                id: 0,
                country: 'Canada',
                city: 'Toronto',
                address: '456 Oak Lane'
            }
        ];

        this.getLocationList = function(){
            return locationList;
        };

        var types = [
            {
                id: 0,
                name: 'Show'
            },
            {
                id: 1,
                name: 'Festival'
            }
        ];

        this.getTypesList = function(){
            return types;
        };
    })
;