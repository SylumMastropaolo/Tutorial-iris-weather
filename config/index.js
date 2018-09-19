require('dotenv').config();
const bunyan = require('bunyan');

const log = {
    development: () => {
        return bunyan.createLogger({name: 'IRIS-weather-development', level: 'debug'});
    },
    production: () => {
        return bunyan.createLogger({name: 'IRIS-weather-production', level: 'info'});
    },
    test: () => {
        return bunyan.createLogger({name: 'IRIS-weather-test', level: 'fatal'});
    }
};

module.exports = {
    openweatherApiKey: process.env.OPEN_WEATHER_API_KEY,
    log: (env) => {
        if(env) return log[env]();
        return log[process.env.NODE_ENV || 'development']();
    }
};
