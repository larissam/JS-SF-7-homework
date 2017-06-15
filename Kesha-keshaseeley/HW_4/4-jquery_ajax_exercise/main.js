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

// url includes city ID and app ID (key)
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=id=5391997&APPID=fb6d81425e5588a8f97cf0f1468cf720";

// Asynchronous request with callback function
// putting a function within another function to be called later = callback
$.get(weatherUrl, function(response){
  // targets the specific properties in the object being returned, main is a nested object
  var temp = response.main.temp;
  // converts Kelvin to Fahrenheit
  var degF = (temp - 273.15) * 1.8 + 32;
  // Math.floor rounds down
  var degFInt = Math.floor(degF);
  // console.log(degFInt);
  $('#temp').html(degFInt + '\u2109');
});

var weatherUrl2 = "http://api.weatherunlocked.com/api/current/us.94108?app_id=c5b9d9e5&app_key=7ed35bd175a112c23cdb820c4221e772";

$.get(weatherUrl2, function(response){
  var temp = response.temp_f;
  var degFInt = Math.floor(temp);
  $('#temp2').html(degFInt + '\u2109');
});



// BONUS
$('#getTemp').on('click', function(event){
  var value = $('#zip').val();
  var url = "http://api.weatherunlocked.com/api/current/us." + value + "?app_id=c5b9d9e5&app_key=7ed35bd175a112c23cdb820c4221e772";

  $.get(url, function(response){
    var temp = response.temp_f;
    var degFInt = Math.floor(temp);
    $('#temp3').html(degFInt + '\u2109');
  });
  
});
