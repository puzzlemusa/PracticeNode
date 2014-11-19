var https = require("https");
var username = 'puzzlemusa';

var options = {
    host: 'api.github.com',
    path: '/users/' + username + '/repos',
    method: 'GET'
};

var request = https.request(options,function(response) {
    var body = '';
    
    response.on('data', function(chunk){
        body += chunk;
    });
    
    response.on('end', function() {
       console.log('Body' + body); 
    });
    
});
request.end();