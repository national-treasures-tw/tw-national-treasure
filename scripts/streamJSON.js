var fs = require('fs');
var JSONStream = require('JSONStream');
var es = require('event-stream');

var getStream = function () {
    var jsonData = './nara9000.json',
        stream = fs.createReadStream(jsonData, {encoding: 'utf8'}),
        parser = JSONStream.parse('*');
        return stream.pipe(parser);
 }

 getStream().pipe(es.mapSync(function (data) {
    console.log(data);
  }));