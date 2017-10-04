'use strict';

angular.module('iConnectApp')
    .service('artistFactory', function () {
        var artists = [
            {
                type: 'Singer',
                artistTops: [
                    {
                        id: 0,
                        firstName: 'Virgie',
                        lastName: 'Lloyd',
                        country: 'Czech Republic',
                        style: 'Deep House',
                        description: 'A purpose is the eternal condition for success. Every former smoker can tell just how smoker can tell just how smoker can tell just how',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Janie',
                        lastName: 'Gomez',
                        country: 'London',
                        style: 'Jazz',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/1@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Matthew',
                        lastName: 'Holloway',
                        country: 'Lisbon',
                        style: 'R&B, Hip-Hop',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/2@2x.png'
                    },
                    {
                        id: 3,
                        firstName: 'Clyde',
                        lastName: 'Gill',
                        country: 'Sydney',
                        style: 'Soul, R&B',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/3@2x.png'
                    },
                    {
                        id: 4,
                        firstName: 'Troy',
                        lastName: 'Doyle',
                        country: 'New York',
                        style: 'Deep House, Trance',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/4@2x.png'
                    }
                ]
            },
            {
                type: 'Dj\'s',
                artistTops: [
                    {
                        id: 0,
                        firstName: 'Vincentoma',
                        lastName: 'Marshalomo',
                        country: 'El Salvador',
                        style: 'Deep House',
                        description: 'A purpose is the eternal condition for success. Every former smoker can tell just how smoker can tell just how smoker can tell just how',
                        photo: '../../images/Artist_avatars_rndm/5@2x.png'
                    },
                    {
                        id: 1,
                        firstName: 'Clifford',
                        lastName: 'Bryan',
                        country: 'London',
                        style: 'Jazz',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/6@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Randy',
                        lastName: 'Jimenez',
                        country: 'Lisbon',
                        style: 'R&B, Hip-Hop',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/7@2x.png'
                    },
                    {
                        id: 3,
                        firstName: 'Lottie',
                        lastName: 'Hudson',
                        country: 'Sydney',
                        style: 'Soul, R&B',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/8@2x.png'
                    },
                    {
                        id: 4,
                        firstName: 'Harry',
                        lastName: 'Douglas',
                        country: 'New York',
                        style: 'Deep House, Trance',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/9@2x.png'
                    }
                ]
            },
            {
                type: 'Music Band',
                artistTops: [
                    {
                        id: 0,
                        firstName: 'Elsie',
                        lastName: 'Garrett',
                        country: 'Saint Vincent and the Grenadines',
                        style: 'Deep House',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/10@2x.png'
                    },
                    {
                        id: 1,
                        firstName: 'Edward',
                        lastName: 'Floyd',
                        country: 'London',
                        style: 'Jazz',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/11@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Bettie',
                        lastName: 'Colon',
                        country: 'Lisbon',
                        style: 'R&B, Hip-Hop',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/12@2x.png'
                    },
                    {
                        id: 3,
                        firstName: 'Mathilda',
                        lastName: 'Rowe',
                        country: 'Sydney',
                        style: 'Soul, R&B',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/13@2x.png'
                    },
                    {
                        id: 4,
                        firstName: 'Christopher',
                        lastName: 'Ruiz',
                        country: 'New York',
                        style: 'Deep House, Trance',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/14@2x.png'
                    }
                ]
            },
            {
                type: 'MC',
                artistTops: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/15@2x.png'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/16@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/17@2x.png'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/18@2x.png'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/19@2x.png'
                    },
                ]
            },
            {
                type: 'Dancer',
                artistTops: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/20@2x.png'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/21@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                ]
            },
            {
                type: 'Painter',
                artistTops: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'John',
                        lastName: 'Cena',
                        country: 'America',
                        style: 'Singer',
                        description: 'The Cenation Leader, The Champ, The Face of the WWE, The Hustle Loyalty & Respect Soldier, The Chain Gang Soldier, The Doctor of Thuganomics, Mr. Money in the Bank, Mr. P, The Prototype.',
                        photo: '../../images/Artist_avatars_rndm/4@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Lana',
                        lastName: 'Del Rey',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/5@2x.png'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/6@2x.png'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    }
                ]
            }
        ];

        var newArtist = [
            {
                id: 0,
                firstName: 'John',
                lastName: 'Cena',
                country: 'America',
                style: 'Singer',
                description: 'Read, out with friends, listen to music, draw and learn new things.',
                photo: '../../images/Artist_avatars_rndm/1@2x.png'
            },
            {
                id: 1,
                firstName: 'Lottie',
                lastName: 'Hudson',
                country: 'Sydney',
                style: 'Soul, R&B',
                description: 'Read, out with friends, listen to music, draw and learn new things.',
                photo: '../../images/Artist_avatars_rndm/2@2x.png'
            },
            {
                id: 2,
                firstName: 'Nicole',
                lastName: 'Pearson',
                country: 'Belarus',
                style: 'Singer',
                description: 'Read, out with friends, listen to music, draw and learn new things.',
                photo: '../../images/Artist_avatars_rndm/3@2x.png'
            },
            {
                id: 3,
                firstName: 'Randy',
                lastName: 'Jimenez',
                country: 'Lisbon',
                style: 'R&B, Hip-Hop',
                description: 'Read, out with friends, listen to music, draw and learn new things.',
                photo: '../../images/Artist_avatars_rndm/4@2x.png'
            },
            {
                id: 4,
                firstName: 'Nicole',
                lastName: 'Pearson',
                country: 'Belarus',
                style: 'Singer',
                description: 'Read, out with friends, listen to music, draw and learn new things.',
                photo: '../../images/placeholder-artist.svg'
            }
        ];

        this.getArtists = function () {
            return artists;
        };

        this.getArtist = function (index) {
            return artists[index];
        };
        this.getNewArtists = function () {
            return newArtist;
        };

        this.getNewArtist = function (index) {
            return newArtist[index];
        };

        var allArtists = {
            'Singer': {
                artistList: [
                    {
                        id: 0,
                        firstName: 'John',
                        lastName: 'Cena',
                        country: 'America',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/1@2x.png'
                    },
                    {
                        id: 1,
                        firstName: 'Lottie',
                        lastName: 'Hudson',
                        country: 'Sydney',
                        style: 'Soul, R&B',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/2@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/3@2x.png'
                    },
                    {
                        id: 3,
                        firstName: 'Randy',
                        lastName: 'Jimenez',
                        country: 'Lisbon',
                        style: 'R&B, Hip-Hop',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/Artist_avatars_rndm/4@2x.png'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    }
                ]
            },
            'Dj\'s': {
                artistList: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dj\'s',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dj\'s',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dj\'s',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dj\'s',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dj\'s',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    }
                ]
            },
            'Music Band': {
                artistList: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Music Band',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    }
                ]
            },
            'MC': {
                artistList: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'MC',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                ]
            },
            'Dancer': {
                artistList: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dancer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                ]
            },
            'Painter': {
                artistList: [
                    {
                        id: 0,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Painter',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Read, out with friends, listen to music, draw and learn new things.',
                        photo: '../../images/placeholder-artist.svg'
                    }
                ]
            }
        };

        this.getArtistByType = function(genres){
            return allArtists[genres];
        };

        this.getAllArtist = function(){
            return allArtists;
        }
    })
;