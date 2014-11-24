var https = require("https");
var options = {
    'host': 'stream.twitter.com',
    'path': '/1.1/statuses/filter.json?track=bieber',
    'method': 'GET',
    'headers': {
        'Authorization': 'Basic ' + new Buffer('puzzlemusa:TestForNode').toString('base64'),
        'user-agent' : 'twitter-node'
    },
    
};
 
var request = https.request(options, function(response) {
    var body = '';
    response.on('data', function(chunk){
        //var tweet = JSON.parse(chunk);
        console.log('Tweet: ' + chunk);
    });
    response.on('end', function() {
        console.log('Disconnected');
    });
});
request.end();