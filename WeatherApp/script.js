const searchButtonDiv = document.getElementById('searchButton');
const weatherTypeDiv = document.getElementById('weather-type')
const showTempDiv = document.getElementById('temp');
const showMinTempDiv = document.getElementById('min-temp');
const showMaxTempDiv = document.getElementById('max-temp');
/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {

    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-RapidAPI-Key': 'd72c98894cmsh28b3af34c5863e1p19f360jsne4b9c3aa39ec',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    //HINT: Use template literals to create a url with input and an API key
    //CODE GOES HERE 
    fetch(URL,options)
    .then(response=>response.json())
    .then(data=>console.log(data.name))
    .catch(error => console.log(error));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
    const cityInputDiv = document.getElementById('city-input');
    const city = cityInputDiv.value;
    console.log(city);
    getWeatherData(city);
    // CODE GOES HERE
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (data) => {
    //CODE GOES HERE
    weatherTypeDiv.innerText = data.weather[0].main
    showTempDiv.innerText = `Temp : ${data.main.temp}`
    showMinTempDiv.innerText = `Temp_min : ${data.main.temp_min}`
    showMaxTempDiv.innerText = `Temp_max: ${data.main.temp_max}`

}