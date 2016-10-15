var firebase = require('firebase');
firebase.initializeApp({databaseURL: "https://national-treasure.firebaseio.com"});

var db = firebase.database();
var ref = db.ref("/nara");
var apiRef = ref.child("api");

var axios = require('axios');

const stripeDollarSign = (objectArray) => {
	return objectArray.map(object => {
		if (object.publicContributions && object.publicContributions.tags && object.publicContributions.tags.tag.length > 0) {
			return Object.assign(object, {}, {
				publicContributions: {}
			});
		} else {
			return object;
		}
	});
}

axios.get('https://catalog.archives.gov/api/v1/?q=taiwan&rows=100')
.then(response => {
	apiRef.set(stripeDollarSign(response.data.opaResponse.results.result), error => {
		if (error) {
			console.log(error);
		} else {
			console.log('done');
		}
	});
})
.catch(error => console.log(error));

// apiRef.set({hello: 'test'}, error => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log('done');
// 	}
// })