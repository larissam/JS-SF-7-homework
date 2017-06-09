/*

1. Sign up for openweathermap.org and generate an API key.
2. User either $.ajax or $.get to pull weather current data .
   for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
3. Print the temperature in the console. Note that the temperature will be in Kelvin.
4. Incorporate the following code into your app to log a Fahrenheit value for the temperature to the console
   (Fahrenheit temperature is stored in the degFInt variable):
   var degF = (temp - 273.15) * 1.8 + 32;
   var degFInt = Math.floor(degF);
5. Use DOM manipulation to add the returned temperature to the span element with the id "temp".
6. Sign up for developer.weatherunlocked.com and obtain your application ID and application key.
7. Repeat the above steps to obtain the current temperature from this data source, convert it to Fahrenheit,
   log it to the console, and then add it to the DOM (uncomment out the 3 lines indicated in index.html for this step,
   and add your temperature value to the span elmeent with the id "temp2").
8. Refactor your code as necessary to separate the code for DOM manipulation from the code for sending an HTTP request.
BONUS: Implement a form that prompts users for a city and state and returns data for the location they specify 
   (Uncomment out the existing form code in index.html as marked).

*/

'use strict';

var urlOpenWeatherMap = 'http://api.openweathermap.org/data/2.5/weather?zip={ZIP_CODE},us&APPID={APP_KEY}';
var keyOpenWeatherMap = '';

var urlWeatherUnlock = 'http://api.weatherunlocked.com/api/current/us.{ZIP_CODE}?app_id={APP_ID}&app_key={APP_KEY}';
var keyWeatherUnlock = '';
var appWeatherUnlock = ''


function convertKelvan(temp) {
    var degF = (temp - 273.15) * 1.8 + 32;
    return degF;
}

function getOpenWeather(zip) {
    var temp = urlOpenWeatherMap;
    temp = temp.replace('{APP_KEY}', keyOpenWeatherMap);

    getWeatherData(temp, zip, handleData);
}

function getWeatherUnlock(zip) {
    var temp = urlWeatherUnlock;
    temp = temp.replace('{APP_ID}', appWeatherUnlock);
    temp = temp.replace('{APP_KEY}', keyWeatherUnlock);

    getWeatherData(temp, zip, handleData2);
}

function getWeatherData(url, zip, cb) {
    //console.log(url);

    url = url.replace('{ZIP_CODE}', zip);

    //$.when($.get(url)).then(function (data) {
    //    //console.log(data);
    //    return data;
    //}, error);

    $.ajax({
        url: url,
        type: 'GET',
        success: cb
    }, error);

}

function handleData(objWeather) {
    var tempKelven = objWeather['main'].temp;
    var tempf = convertKelvan(tempKelven);

    $('#temp').html(Math.floor(tempf));
}

function handleData2(objWeather) {
    var tempf = objWeather['temp_f'];

    $('#temp2').html(Math.floor(tempf));
}

function error() {
    alert("There was a glitch in the matrix.");
}

getOpenWeather('94109'); //***SF.
getWeatherUnlock('94109'); //***SF.