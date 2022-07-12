const {fromIsoToHuman, fromHumanToIso} = require('@sineverba/date-convert')


var humanDate = fromIsoToHuman('20220711')
console.log('form iso to human', humanDate)


var humanDate = fromIsoToHuman("20200102", "AAAA-MM-DD");
console.log(humanDate); // returns 2020-01-02

var isoDate = fromHumanToIso("02/01/2020")
console.log(isoDate); // returns 20200102