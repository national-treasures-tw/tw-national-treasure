var jsdom = require("jsdom");
var _ = require('lodash');
var fs = require('fs');

jsdom.env({
    file: '../data/cks.html',
    done: function (err, window) {
        global.window = window;
        global.document = window.document;
        // now you can work on parsing HTML as you normally would in a browser
        // e.g. this will work  
        scrape();
    }
});
function scrape() {
    var anchors = document.getElementsByTagName('a');
    // console.log(anchors[500].href)
    var arr = [].slice.call(anchors);
    var mapped = arr.map(a => a.href.split('/')[4] ? a.href.split('/')[4].split('?')[0] : null)
    .map(el => (el && !!parseInt(el)) ? el : null );

    var naIds = _.compact(mapped);
    var naIdJSON = naIds.map(id => ( { naId: id }));

    var outputFilename = 'nara-cks.json';
        
    fs.writeFile(outputFilename, JSON.stringify(naIdJSON), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + outputFilename);
        }
    })
}
