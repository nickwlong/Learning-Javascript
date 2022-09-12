const got = require("got");
const apiKey = require("./apiKey.js"); // include our key

class WeatherApi {
  constructor() {
    this.city = "London";
    this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city}&appid=${apiKey}`;
  }

  fetchWeatherData(location, callback) {
    this.city = location;
    got(this.apiUrl).then(callback);
  }
}

class Weather {
  constructor(api) {
    this.api = api;
    this.weatherData = null;
  }
  fetch(location) {
    this.api.fetchWeatherData(location, this.getWeatherData);
  }

  getWeatherData(response) {
    console.log(response);
  }
}

weaApi = new WeatherApi();
weather = new Weather(weaApi);

weather.fetch("Bristol");
weather.getWeatherData();

module.exports = Weather;
module.exports = WeatherApi;
