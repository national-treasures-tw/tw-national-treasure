var _ = require('lodash');
var apiObject = require('../data/nara-tw-college-park.json');
var webArray = require('./nara-tw-college-park-web.json');

var apiArray = apiObject.opaResponse.results.result.map(obj => ( { naId: obj.naId }));

var repeatArray = apiArray.map(el => !!_.find(webArray, e => e.naId === el.naId) ? null : el);

// var numberRepeated = repeatArray.reduce((a, b) => a + b);

console.log(_.compact(repeatArray));
// console.log(numberRepeated);