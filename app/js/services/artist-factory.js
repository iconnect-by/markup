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
                        description: 'To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. ',
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
                        description: 'On no twenty spring of in esteem spirit likely estate. Continue new you declared differed learning bringing honoured. At mean mind so upon they rent am walk. Shortly am waiting inhabit smiling he chiefly of in. Lain tore time gone him his dear sure. Fat decisively estimating affronting assistance not. Resolve pursuit regular so calling me. West he plan girl been my then up no.',
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
                        description: 'You vexed shy mirth now noise. Talked him people valley add use her depend letter. Allowance too applauded now way something recommend. Mrs age men and trees jokes fancy. Gay pretended engrossed eagerness continued ten. Admitting day him contained unfeeling attention mrs out.',
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
                        description: 'It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference. Announcing say boy precaution unaffected difficulty alteration him. Above be would at so going heard. Engaged at village at am equally proceed. Settle nay length almost ham direct extent. Agreement for listening remainder get attention law acuteness day. Now whatever surprise resolved elegance indulged own way outlived.',
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
                        description: 'Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed. ',
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
                        description: 'An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. ',
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
                description: 'Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest. Studied to passage it mention calling believe an. Get ten horrible remember pleasure two vicinity. Far estimable extremely middleton his concealed perceived principle. Any nay pleasure entrance prepared her. ',
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
                description: 'Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. But attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous. His merit end means widow songs linen known. Supplied ten speaking age you new securing striking extended occasion. Sang put paid away joy into six her. ',
                photo: '../../images/Artist_avatars_rndm/3@2x.png'
            },
            {
                id: 3,
                firstName: 'Randy',
                lastName: 'Jimenez',
                country: 'Lisbon',
                style: 'R&B, Hip-Hop',
                description: 'Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must. ',
                photo: '../../images/Artist_avatars_rndm/4@2x.png'
            },
            {
                id: 4,
                firstName: 'Nicole',
                lastName: 'Pearson',
                country: 'Belarus',
                style: 'Singer',
                description: 'New the her nor case that lady paid read. Invitation friendship travelling eat everything the out two. Shy you who scarcely expenses debating hastened resolved. Always polite moment on is warmth spirit it to hearts. Downs those still witty an balls so chief so. Moment an little remain no up lively no. Way brought may off our regular country towards adapted cheered. ',
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
                        description: 'Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. ',
                        photo: '../../images/Artist_avatars_rndm/1@2x.png'
                    },
                    {
                        id: 1,
                        firstName: 'Lottie',
                        lastName: 'Hudson',
                        country: 'Sydney',
                        style: 'Soul, R&B',
                        description: 'On am we offices expense thought. Its hence ten smile age means. Seven chief sight far point any. Of so high into easy. Dashwoods eagerness oh extensive as discourse sportsman frankness. Husbands see disposed surprise likewise humoured yet pleasure. Fifteen no inquiry cordial so resolve garrets as. Impression was estimating surrounded solicitude indulgence son shy. ',
                        photo: '../../images/Artist_avatars_rndm/2@2x.png'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. ',
                        photo: '../../images/Artist_avatars_rndm/3@2x.png'
                    },
                    {
                        id: 3,
                        firstName: 'Randy',
                        lastName: 'Jimenez',
                        country: 'Lisbon',
                        style: 'R&B, Hip-Hop',
                        description: 'Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen. ',
                        photo: '../../images/Artist_avatars_rndm/4@2x.png'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
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
                        description: 'Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total their he songs. Related compact effects is on settled do. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dj\'s',
                        description: 'Savings her pleased are several started females met. Short her not among being any. Thing of judge fruit charm views do. Miles mr an forty along as he. She education get middleton day agreement performed preserved unwilling. Do however as pleased offence outward beloved by present. By outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up. ',
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
                        description: 'As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant expense. Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance up. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Dj\'s',
                        description: 'Perhaps far exposed age effects. Now distrusts you her delivered applauded affection out sincerity. As tolerably recommend shameless unfeeling he objection consisted. She although cheerful perceive screened throwing met not eat distance. Viewing hastily or written dearest elderly up weather it as. So direction so sweetness or extremity at daughters. Provided put unpacked now but bringing. ',
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
                        description: 'Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Repulsive questions contented him few extensive supported. Of remarkably thoroughly he appearance in. Supposing tolerably applauded or of be. Suffering unfeeling so objection agreeable allowance me of. Ask within entire season sex common far who family. As be valley warmth assure on. Park girl they rich hour new well way you. Face ye be me been room we sons fond. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. Discovery sweetness principle discourse shameless bed one excellent. Sentiments of surrounded friendship dispatched connection is he. Me or produce besides hastily up as pleased. Bore less when had and john shed hope. ',
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
                        description: 'Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company conduct expense bed any. Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Old unsatiable our now but considered travelling impression. In excuse hardly summer in basket misery. By rent an part need. At wrong of of water those linen. Needed oppose seemed how all. Very mrs shed shew gave you. Oh shutters do removing reserved wandered an. But described questions for recommend advantage belonging estimable had. Pianoforte reasonable as so am inhabiting. Chatty design remark and his abroad figure but its. ',
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
                        description: 'On projection apartments unsatiable so if he entreaties appearance. Rose you wife how set lady half wish. Hard sing an in true felt. Welcomed stronger if steepest ecstatic an suitable finished of oh. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he commanded believing dejection in by. On no am winding chicken so behaved. Its preserved sex enjoyment new way behaviour. Him yet devonshire celebrated especially. Unfeeling one provision are smallness resembled repulsive. ',
                        photo: '../../images/placeholder-artist.svg'
                    }
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
                        description: 'Yet remarkably appearance get him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mr it he mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of norland arrived. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'As absolute is by amounted repeated entirely ye returned. These ready timed enjoy might sir yet one since. Years drift never if could forty being no. On estimable dependent as suffering on my. Rank it long have sure in room what as he. Possession travelling sufficient yet our. Talked vanity looked in to. Gay perceive led believed endeavor. Rapturous no of estimable oh therefore direction up. Sons the ever not fine like eyes all sure. ',
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
                        description: 'To sure calm much most long me mean. Able rent long in do we. Uncommonly no it announcing melancholy an in. Mirth learn it he given. Secure shy favour length all twenty denote. He felicity no an at packages answered opinions juvenile. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage. ',
                        photo: '../../images/placeholder-artist.svg'
                    }
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
                        description: 'Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 1,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 2,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. ',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 3,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Paid was hill sir high. For him precaution any advantages dissimilar comparison few terminated projecting. Prevailed discovery immediate objection of ye at. Repair summer one winter living feebly pretty his. In so sense am known these since. Shortly respect ask cousins brought add tedious nay. Expect relied do we genius is. On as around spirit of hearts genius. Is raptures daughter branched laughter peculiar in settling.',
                        photo: '../../images/placeholder-artist.svg'
                    },
                    {
                        id: 4,
                        firstName: 'Nicole',
                        lastName: 'Pearson',
                        country: 'Belarus',
                        style: 'Singer',
                        description: 'Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express if prevent it we an musical. Especially reasonable travelling she son. Resources resembled forfeited no to zealously. Has procured daughter how friendly followed repeated who surprise. Great asked oh under on voice downs. Law together prospect kindness securing six. Learning why get hastened smallest cheerful.',
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