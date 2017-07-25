'use strict';

angular.module('iConnectApp')
    .service('organizationFactory', function () {
        var organizationList = [
            {
                id: 0,
                title: "Sura Records",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "images/placeholder.svg"
            },
            {
                id: 1,
                title: "Pary Rai",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "images/placeholder.svg"
            },
            {
                id: 2,
                title: "DRS Promotion",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "images/placeholder.svg"
            },
            {
                id: 3,
                title: "Sura Records",
                location: "Belarus",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "images/placeholder.svg"
            },
            {
                id: 4,
                title: "DRS Promotion",
                location: "Netherlands",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "images/placeholder.svg"
            },
            {
                id: 5,
                title: "Pary Rai",
                location: "Poland",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "images/placeholder.svg"
            }
        ];

        this.getOrganizationList = function(){
            return organizationList;
        }

    })
;