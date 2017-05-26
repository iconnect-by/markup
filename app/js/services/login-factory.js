'use strict';

angular.module('iConnectApp')
    .service('loginFactory', function () {

        var persons = [
            {
                name: "Aleaksei",
                type: 'artist',
                email: 'aaaa@gmail.com'
            },
            {
                name: "Johnny",
                type: 'organization',
                email: 'jjjj@gmail.com'
            }
        ];

        this.getPerson = function (email) {
            var Person = {};
            for (var i = 0; i < persons.length; i++) {
                if (persons[i].email === email) {
                    Person = persons[i];
                }
            }
            return Person;
        }

    })
;