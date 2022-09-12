const got = require("got");

const fetchJson = function (url) {
  got(url).then(handleReceivedResponse);
};

const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
};

fetchJson("https://jsonplaceholder.typicode.com/todos");
