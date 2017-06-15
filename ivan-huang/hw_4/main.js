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

var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "e3b8b5eb39a5a7ab285856d81ead949d";
$.ajax({
    url:
    'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e3b8b5eb39a5a7ab285856d81ead949d',
    success: function(data) {
        console.log(data.main.temp);
    var degF = (data.main.temp - 273.15) * 1.8 + 32;
    var degFInt = Math.floor(degF);
    $("#temp").append(degFInt);
    }
});

var weatherUrl2 = "http://api.weatherunlocked.com/api/trigger/51.50,-0.12/forecast 2014.04.24.12,2014.04.25.12 temperature gt 16?app_id={APP_ID}&app_key={d27b75fbc0cd0935e4ec654eabd477fd}";
var apiKey2 = "d27b75fbc0cd0935e4ec654eabd477fd";
$.ajax({
    url:
    'http://api.weatherunlocked.com/api/current/40.71,-74.00?app_id=7c89ed30&app_key=d27b75fbc0cd0935e4ec654eabd477fd',
    success: function(data) {
        console.log(temperature_f);
    var $summary = $("<span>").append(data);
    }
});


/*
"use strict";


$(document).ready(function () {
    $("#surveyList li").each(function() {
        var $button = $('<button />').html('Remove question');
        $(this).append($button);
    });


    //event handler for submit
    $('#surveyBuilder').on('submit', function(evt) {
        var question, 
            $newLi;

        evt.preventDefault();
        //get question values
        question = $('#question').val().trim();
        $('#question').val('').focus();

        if (question === '') {
            return;
        }

        $newLi = $('<li class="form-group padout">');
        $newLi.append('<label>');
        $newLi.append('<input type="text" class="form-control">');
        $newLi.append('<button> Remove question </button>'); 
        $newLi.find('label').text(question);

        $('#surveyList').append($newLi);

        //with chaining
        // $('<li class="form-group padout"></li>')
        //     .append('<label></label>')
        //     .append('<input type="text" class="form-control" />')
        //     .append('<button>Remove question</button>')
        //     .appendTo('#surveyList')
        //     .find('label').text(question);

        
    });

    $('#finalSurvey').on('click', function(evt) {
        var $target;

        evt.preventDefault();
        
        $target = $(evt.target);
        if ($target.is('button')) {
            $target.parent().remove();
        }    
    });

});
*/