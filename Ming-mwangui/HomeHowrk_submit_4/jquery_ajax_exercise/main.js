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

//weatherunlocked
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?zip=94102,us";
var apiKey = "08f18cb8c4d95b94367d4ec2a3e5ed08";
var url = weatherUrl;
$.get(url + '&APPID=' + apiKey, function (respone) {
    console.log(respone);
    openWeatherMapData(respone);
});

function openWeatherMapData(respone) {
    var degF = (respone.main.temp - 273.15) * 1.8 + 32;
    var degFInt = Math.floor(degF);
    $('#temp').html(degFInt + '°С');
}

//openweathermap
var api = "http://api.weatherunlocked.com/api/current/us.94102?app_id=";
var appId = "cb51ba88";
var key = "fe3f7f34e90c5b48695c88c66b20ee35";

$.get(api+ appId + '&app_key='+ key, function (respone) {
    console.log('respone', respone);
    weatherUnLockedData(respone);
});

function weatherUnLockedData(respone) {
    var temp = Math.floor(respone.temp_f);
    $('#temp2').html(temp + '°С');
}

$('#getTemp').on('click', function (e) {
    e.preventDefault();
    var city = $('#city').val();
    var state = $('#state').val();

    var mapUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var keyin = city+ ',' +state;
    var c = '&APPID=' + apiKey;

    if (city != '' && state != '') {

        $.get(mapUrl + keyin + '&APPID=' + apiKey, function (respone) {
            console.log(' xx respone:', respone);
            data(respone);
        });
        function data(respone) {
            var degF = (respone.main.temp - 273.15) * 1.8 + 32;
            var degFInt = Math.floor(degF);
            $('#temp3').html(degFInt + '°С');
            $('#yourlocation').html(city + ',' + state);
        }

        $('#temp3').parent().removeClass('hide');
    } else {
        alert('Please enter a value City & State');
    }
});


//oakland

//http://api.openweathermap.org/data/2.5/weather?zip=94102,us

//http://openweathermap.org/data/2.5/find?callback=jQuery1910931498094633922_1497240630122&q=Pleasanton,us&type=like&sort=population&cnt=30&appid=b1b15e88fa797225412429c1c50c122a1&_=1497240630124
//  http://openweathermap.org/data/2.5/find?callback=jQuery1910931498094633922_…=population&cnt=30&appid=b1b15e88fa797225412429c1c50c122a1&_=1497240630124


// console.log('response', respone);
// console.log('main', respone.main);
// console.log('The temperature in Kelvin is: ', respone.main.temp);
// console.log('0: ', respone.weather[0].main);

//https://openweathermap.org/appid#use - how to setup key inside the url
//https://developer.weatherunlocked.com - api/{LocalWeatherType}/{Location}?app_id={APP_ID}&app_key={APP_KEY}
//http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id={APP_ID}&app_key={APP_KEY}
//http://api.weatherunlocked.com/api/forecast/51.50,-0.12?app_id={APP_ID}&app_key={APP_KEY}
//var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=San,Francisco";
