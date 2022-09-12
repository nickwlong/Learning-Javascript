const got = require("got");

const fetchRepositoryInfo = (section, callback) => {
  url = "https://api.github.com/repos/" + section;
  got(url).then((handleReceivedResponse) => {
    callback(handleReceivedResponse);
  });
};

const handleReceivedResponse = (response) => {
  return JSON.parse(response.body);
};

fetchRepositoryInfo("sinatra/sinatra", (receivedResponse) => {
  console.log(receivedResponse);
});
