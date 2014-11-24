var github = require("./github.js");

github.getRepos('puzzlemusa', function(repos){
    console.log('My repos: ', repos);    
});
