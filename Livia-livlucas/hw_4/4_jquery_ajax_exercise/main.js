/*

1. Sign up for openweathermap.org and generate an API key.
2. Use either $.ajax or $.get to pull weather current data .
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

//https://openweathermap.org/appid#use

'use strict';

var openWeather = {
		url: 'http://api.openweathermap.org/data/2.5/weather?q={location}&APPID={AK}',
		key: 'd282ee0ea1f86acc79dfd7df567a81a0',
		location: '94102',
		fahrenheitFilter: function (response) {
			return kelvinToFahrenheit(response.main.temp);
		},
	},

	weatherUnlocked = {
		url: 'http://api.weatherunlocked.com/api/current/{location}?app_id=fcacd63b&app_key={AK}',
		key: '7086ba7333efbb43e16e38c265c16d89',
		location: 'us.94102',
		fahrenheitFilter: function (response) {
			return response.temp_f;
		}
	};

function addTemperatureToTitle(id, fahrenheit) {
	$('#' + id).text(fahrenheit.toFixed(1) + '°F');
}

function kelvinToFahrenheit(kelvinTemp) {
	return (kelvinTemp * 9/5) - 459.67;
}

function temperatureApiRequest(apiDetails, callback) {
	$.ajax({
		url: apiDetails.url
			.replace('{location}', apiDetails.location)
			.replace('{AK}', apiDetails.key),
		type: 'GET',
		success: function (response) {
			var fahrenheit;

			fahrenheit = apiDetails.fahrenheitFilter(response);

			callback(fahrenheit);
		}
	});
}

$(function () {
	//calling both apis
	temperatureApiRequest(openWeather, function (fahrenheit) {
		addTemperatureToTitle('temp', fahrenheit);
	});

	temperatureApiRequest(weatherUnlocked, function (fahrenheit) {
		addTemperatureToTitle('temp2', fahrenheit);
	});

	$('#location-input').on('submit', function (e) {
		var location, $form;

		e.preventDefault();

		location = {
			city: $('#city').val(),
			state: $('#state').val(),
		};

		if (location.city.trim() === '') return;

		$('#location').text(location.city + ', ' + location.state.toUpperCase());

		openWeather.location = encodeURI(location.city) + ',us';
		temperatureApiRequest(openWeather, function (fahrenheit) {
			addTemperatureToTitle('temp', fahrenheit);
		});
	});
});



// var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=94102&APPID=d282ee0ea1f86acc79dfd7df567a81a0";
// var apiKey = "d282ee0ea1f86acc79dfd7df567a81a0";


// $.ajax({
// 	url: weatherUrl,
// 	data: {
// 		format: 'json'
// 	},
// 	success: function(response) {
// 		var kelvinTemperature = response.main.temp,
// 			fahrenheit = kelvinToFahrenheit(kelvinTemperature);
		
// 		$('#temp').append(fahrenheit + ' °F');
// 	}
// });



// var weather2Url = "http://api.weatherunlocked.com/api/current/us.94102?app_id=fcacd63b&app_key=7086ba7333efbb43e16e38c265c16d89";
// var api2Key = "7086ba7333efbb43e16e38c265c16d89";

// $.ajax({
// 	url: weather2Url,
// 	type: "GET",
// 	data: {
// 		format: 'json'
// 	},
// 	success: function(response) {
// 		console.log(response.temp_f);
		
// 		$('#temp').append(Math.floor(response.temp_f) + ' °F');
// 	}
// });