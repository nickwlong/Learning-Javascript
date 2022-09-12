const got = require("got");

const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
};

got("https://api.github.com/repos/sinatra/sinatra").then(
  handleReceivedResponse
);
