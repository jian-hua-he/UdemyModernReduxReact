const API_KEY = '3544e9a0116381634e94077a57c0c860';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;
const FETCH_WEATHER = 'FETCH_WEATHER';

function fetchWeather(city) {
    let url = `${ROOT_URL}&q=${city},us`;

    return {
        type: FETCH_WEATHER,
    };
}

export FETCH_WEATHER;
export fetchWeather;