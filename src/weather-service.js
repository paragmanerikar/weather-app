const request = require("request");

const getWeather = (location, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=1906aca6d0992cd59ec769ffd7015878&query=${location}`;
  request({ url, json: true }, (error, response, body) => {
    if (error || body.error) {
      return body.error || "Please specify a valid location.";
    } else {
      callback({
        location: `${body.location.name}, ${body.location.country}`,
        weather: `Weather is ${body.current.weather_descriptions[0]} and Current Temprature is : ${body.current.temperature} degree celsius. It feels like ${body.current.feelslike} degree celsius.`,
        weather_icon: `${body.current.weather_icons}`
      });
    }
  });
};

module.exports = getWeather;
