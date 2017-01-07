var web1 = require('../data/nara-tw-college-park-web-1.json');
var web2 = require('../data/nara-tw-college-park-web-2.json');
var web3 = require('../data/nara-tw-college-park-web-3.json');
var fs = require('fs');
var merged = [...web1, ...web2, ...web3];

var outputFilename = 'nara-tw-college-park-web.json';
        
fs.writeFile(outputFilename, JSON.stringify(merged), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("JSON saved to " + outputFilename);
  }
})