/*
 * {
 *   "number": 1,
 *   "name": "",
 *   "startTime": "2024-03-03T11:00:00-05:00",
 *   "endTime": "2024-03-03T12:00:00-05:00",
 *   "isDaytime": true,
 *   "temperature": 57,
 *   "temperatureUnit": "F",
 *   "temperatureTrend": null,
 *   "probabilityOfPrecipitation": {
 *       "unitCode": "wmoUnit:percent",
 *       "value": 2
 *   },
 *   "dewpoint": {
 *       "unitCode": "wmoUnit:degC",
 *       "value": 8.3333333333333339
 *   },
 *   "relativeHumidity": {
 *       "unitCode": "wmoUnit:percent",
 *       "value": 72
 *   },
 *   "windSpeed": "8 mph",
 *   "windDirection": "N",
 *   "icon": "https://api.weather.gov/icons/land/day/bkn,2?size=small",
 *   "shortForecast": "Partly Sunny",
 *   "detailedForecast": ""
 * }
 */

export const formatHourlyForecastObject = (hourlyForecast = {}) => {
  const windSpeed = hourlyForecast.windSpeed || '';
  const windSpeedMph = parseInt(windSpeed.replace(' mph', ''), 10);

  return {
    dewpoint: hourlyForecast.dewpoint?.value || 0,
    endTime: hourlyForecast.endTime,
    isDaytime: hourlyForecast.isDaytime || false,
    probabilityOfPrecipitation: hourlyForecast.probabilityOfPrecipitation?.value || 0,
    relativeHumidity: hourlyForecast.relativeHumidity?.value || 0,
    shortForecast: hourlyForecast.shortForecast,
    startTime: hourlyForecast.startTime,
    temperature: hourlyForecast.temperature,
    temperatureUnit: hourlyForecast.temperatureUnit,
    windDirection: hourlyForecast.windDirection,
    windSpeedMph: windSpeedMph || 0,
  };
};
