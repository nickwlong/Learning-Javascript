const got = require("got");

class GithubApi {
  constructor() {
    this.webpage = "https://api.github.com/repos/";
  }

  fetchRepositoryInfo(section, callback) {
    this.webpage += section;
    got(this.webpage).then((handleReceivedResponse) => {
      callback(handleReceivedResponse);
    });
  }

  handleReceivedResponse(response) {
    return JSON.parse(response.body);
  }
}

class GitHub {
  constructor(api) {
    api = api;
  }
  fetch(section) {
    api.fetchRepositoryInfo(section, this.getRepoData);
  }
  getRepoData(response) {
    console.log(response)
  }
}

module.exports = GithubApi;

module.exports = GitHub;

api = new GithubApi();
github = new GitHub(api);

github.fetch('sinatra/sinatra')

