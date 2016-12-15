var fs = require('fs');

// var jsonString = JSON.stringify(fs.readFileSync('./nara9000-2.json', 'utf8'));

var JSONStream = require('JSONStream');
var es = require('event-stream');

var getStream = function () {
    var jsonData = './nara9000-2.json',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        stringified = JSONStream.stringify(false);
        return stream.pipe(stringified);
 }

 
// s -> s
function strip(s) {
    return s.split('').filter(function (x) {
        var n = x.charCodeAt(0);

        return 31 < n && 127 > n;
    }).join('');
}

let progress = 0;
getStream().pipe(es.map(function (data, callback) {
  //transform data
  // ...
  progress += 1;
  console.log('processing...' + progress);
  callback(null, strip(data))
}))
.pipe(fs.createWriteStream('nara9000-clean.json'));

// var nara9000CleanString = strip(jsonString);


// var outputFilename = 'nara9000-clean.json';
// console.log('commencing file writing...');
// fs.writeFile(outputFilename, nara9000CleanString, function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("JSON saved to " + outputFilename);
//     }
// });