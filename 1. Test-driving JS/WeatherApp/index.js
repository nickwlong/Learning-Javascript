const got = require('got');
const apiKey = require("./apiKey.js"); // include our key



class WeatherApi {
  constructor(){
    this.city = 'London';
    this.apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.city}&appid=${apiKey}`;
  }

  fetchWeatherData(location, callback) {
    this.city = location
    got(this.apiUrl).then(callback)
  }

}

const api = new WeatherApi();

api.fetchWeatherData('London', (weatherData) => {
  console.log(weatherData);
});
