var github = require("puzzlemusa-github-example")
github.getRepos('puzzlemusa', function(repos){
    console.log('My repos: ' , repos);
})