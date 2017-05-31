'use strict';

angular.module('iConnectApp')
    .service('organizationFactory', function () {
        var organizationList = [
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
            },
            {
                id: 2,
                title: "DRS Promotion",
                location: "Belarus",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            },
            {
                id: 3,
                title: "Sura Records",
                location: "Belarus",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            },
            {
                id: 4,
                title: "DRS Promotion",
                location: "Netherlands",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            },
            {
                id: 5,
                title: "Pary Rai",
                location: "Poland",
                discrabe: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "http://placehold.it/100x100"
            }
        ];

        this.getOrganizationList = function(){
            return organizationList;
        }

    })
;