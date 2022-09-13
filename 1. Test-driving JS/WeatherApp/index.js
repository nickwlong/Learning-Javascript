const got = require("got");
const apiKey = require("./apiKey.js"); // include our key

module.exports = class WeatherApi {
  constructor() {
    this.city = "London";
    this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city}&appid=${apiKey}`;
  }

  fetchWeatherData(location, callback) {
    this.city = location;
    got(this.apiUrl).then(callback);
  }
}

module.exports = class Weather {
  constructor(api) {
    this.api = api;
    this.weatherData = null;
  };

  fetch(location) {
    this.api.fetchWeatherData(location, (response) => {this.weatherData = response});
  };

  getWeatherData(response) {
    return this.weatherData
  }

  
}

