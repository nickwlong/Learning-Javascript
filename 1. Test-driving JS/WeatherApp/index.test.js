const apiKey = require("./apiKey");
const Weather = require("./index");
const WeatherApi = require("./index");

describe("Weather", function () {
  test("fetch gathers data for Bristol", function () {
    const weatherApiDbl = {
      fetchWeatherData: (location, callback) => {
        callback({
          weather: [
            {
              main: "Clouds",
              description: "overcast clouds",
            },
          ],
        });
      },
    };
    const weather = new Weather(weatherApiDbl);
    weather.fetch("Bristol");

    expect(weather.getRepoData()).toEqual({
      weather: [
        {
          main: "Clouds",
          description: "overcast clouds",
        },
      ],
    });
  });
});
