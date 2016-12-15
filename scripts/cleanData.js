let nara = require('./nara.json');
const _ = require('lodash');
const fs = require('fs');

const cleanNaraArray = nara.results.result.map((record, index) => 
	((index > 2999 && index < 4000) || (index > 6999) && (index < 8000)) ? null : record
	);

const cleanCompactNaraArray = _.compact(cleanNaraArray);

nara.results.result = cleanCompactNaraArray;

const outputFilename = 'naraClean.json';

fs.writeFile(outputFilename, JSON.stringify(nara), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename + ' with results ');
    }
});