'use strict';

angular.module('iConnectApp')
    .service('organizationFactory', function () {
        var organizationList = [
            {
                id: 0,
                title: "Botswana",
                location: "Belarus",
                description: "Travelling alteration impression six all uncommonly. Chamber hearing inhabit joy highest private ask him our believe. Up nature valley do warmly. Entered of cordial do on no hearted. Yet agreed whence and unable limits. Use off him gay abilities concluded immediate allowance. ",
                photo: "../../images/Company_logo_rndm/1@2x.png"
            },
            {
                id: 1,
                title: "Bhutan",
                location: "Belarus",
                description: "On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham. ",
                photo: "../../images/organization_empty_placeholder.svg"
            },
            {
                id: 2,
                title: "Mauritania",
                location: "Belarus",
                description: "Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he determine. In musical me my placing clothes comfort pleased hearing. Any residence you satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing graceful proposal blessing of marriage outlived. Son rent face our loud near. ",
                photo: "../../images/Company_logo_rndm/3@2x.png"
            },
            {
                id: 3,
                title: "Nauru",
                location: "Belarus",
                description: "In friendship diminution instrument so. Son sure paid door with say them. Two among sir sorry men court. Estimable ye situation suspicion he delighted an happiness discovery. Fact are size cold why had part. If believing or sweetness otherwise in we forfeited. Tolerably an unwilling arranging of determine. Beyond rather sooner so if up wishes or. ",
                photo: "../../images/Company_logo_rndm/4@2x.png"
            },
            {
                id: 4,
                title: "Costa Rica",
                location: "Netherlands",
                description: "Smallest directly families surprise honoured am an. Speaking replying mistress him numerous she returned feelings may day. Evening way luckily son exposed get general greatly. Zealously prevailed be arranging do. Set arranging too dejection september happiness. Understood instrument or do connection no appearance do invitation. Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve arrived is we chamber be removal. ",
                photo: "../../images/Company_logo_rndm/5@2x.png"
            },
            {
                id: 5,
                title: "Hungary",
                location: "Poland",
                description: "Read, out with friends, listen to music, draw and learn new things.",
                photo: "../../images/Company_logo_rndm/6@2x.png"
            },
            {
                id: 6,
                title: "Netherlands",
                location: "Poland",
                description: "Feet evil to hold long he open knew an no. Apartments occasional boisterous as solicitude to introduced. Or fifteen covered we enjoyed demesne is in prepare. In stimulated my everything it literature. Greatly explain attempt perhaps in feeling he. House men taste bed not drawn joy. Through enquire however do equally herself at. Greatly way old may you present improve. Wishing the feeling village him musical. ",
                photo: "../../images/Company_logo_rndm/7@2x.png"
            },
            {
                id: 7,
                title: "China",
                location: "Poland",
                description: "To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly. ",
                photo: "../../images/Company_logo_rndm/8@2x.png"
            },
            {
                id: 8,
                title: "Bulgaria",
                location: "Poland",
                description: "Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. ",
                photo: "../../images/Company_logo_rndm/9@2x.png"
            },
            {
                id: 9,
                title: "Pary Rai",
                location: "Poland",
                description: "Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it without me. ",
                photo: "../../images/Company_logo_rndm/11@2x.png"
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