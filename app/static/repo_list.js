// just get this shit to load some repos to a dict
var debug = true;

var github_api = 'https://api.github.com/users/garuuda';

if(debug){
    console.log("Script loaded?");
}

// to be called by request.onload only
function dumpResponse() {
    console.log(this.responseText);
}

function printRepoCount() {
    var responseObj = JSON.parse(this.responseText);
    console.log(responseObj.login + " has " + responseObj.public_repos + " public repo(s)!");
}

var request = new XMLHttpRequest();
request.onload = dumpResponse;
request.open('get', github_api + '/repos');    
request.send();