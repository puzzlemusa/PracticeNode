var https = require("https");
//var client = https.createClient(80, 'stream.twitter.com');
//Request with headers for basic auth, which Twitter also accepts in addition to oAuth
//Note that we're using method 'statuses/filter' and parameter 'track'
//@Link http://dev.twitter.com/pages/streaming_api_methods#statuses-filter
var request = https.request("GET", 'stream.twitter.com/1/statuses/filter.json?track=some_keyword',{
	"Host":"stream.twitter.com",
	"Authorization":"Basic " + new Buffer('puzzlemusa' + ":" + 'TestForNode').toString('base64'), //Need to create buffer object and base64 encode it
	"User-Agent": "Twitter-Node"
});
 
request.on('response', function(response) {
	response.on('data', function(chunk) {
		console.log(chunk); //should be object with tweet information
	});
	response.on('error', function(error) {
		console.log(error);
	});
	response.on('end', function () {
		console.log('request end');
	});
});
request.on('error', function(error) {
	console.log(error);
});
request.end();