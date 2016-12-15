var axios = require('axios');

var fs = require('fs');

setInterval(() => {
	let json = require('./nara.json');
	let total = json.results.total;
	let currentNumber = json.results.result.length;
	let rowNumber = (total - currentNumber > 1000) ? 1000 : total - currentNumber

	axios.get(`https://catalog.archives.gov/api/v1/?q=taiwan&offset=${currentNumber}&rows=1000`)
	.then(response => {
		const newResultsArray = response.data.opaResponse.results.result;
		const jsonArray = Object.assign(json, {
			results: Object.assign(json.results, {
				result: [...json.results.result, ...newResultsArray]
			})
		});
		var outputFilename = 'nara.json';

		fs.writeFile(outputFilename, JSON.stringify(jsonArray), function(err) {
		    if(err) {
		      console.log(err);
		    } else {
		      console.log("JSON saved to " + outputFilename + ' with ' + currentNumber + ' results ');
		    }
		});
	})
	.catch(error => console.log(error));

}, 15000)
