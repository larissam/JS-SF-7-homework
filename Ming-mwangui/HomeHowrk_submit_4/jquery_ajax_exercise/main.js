'use strict';

//openweathermap
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?";
var target = "zip=94102,us";
var apiKey = "your api key here";
var weatherinSF = weatherUrl + target + '&APPID=' + apiKey;

//weatherunlocked
var unLockedUrl = "http://api.weatherunlocked.com/api/current/us.94102?app_id=";
var appId = "cb51ba88";
var key = "your api key here";
var unLockedWeatherSF = unLockedUrl + appId + '&app_key='+ key;

//global function for re-use
function makeRequest(url, callBackFunciton) {
    $.get(url, function (respaon) {
        callBackFunciton(respaon);
    });
}

//display data method
function openWeatherMapData(respaon) {
    var degF = (respaon.main.temp - 273.15) * 1.8 + 32;
    var degFInt = Math.floor(degF);
    $('#temp').html(degFInt + '°С');
}

function weatherUnLockedData(respone) {
    var temp = Math.floor(respone.temp_f);
    $('#temp2').html(temp + '°С');
}

makeRequest(weatherinSF, openWeatherMapData);
makeRequest(unLockedWeatherSF, weatherUnLockedData);

// For user search function
$('#getTemp').on('click', function (e) {
    e.preventDefault();
    var city = $('#city').val();
    var state = $('#state').val();
    var keyin = city+ ',' +state;

    if (city != '' && state != '') {
        makeRequest(weatherUrl + 'q=' + keyin + '&APPID=' + apiKey, inQuiryData);

        function inQuiryData(respone) {
            var degF = (respone.main.temp - 273.15) * 1.8 + 32;
            var degFInt = Math.floor(degF);
            $('#temp3').html(degFInt + '°С');
            $('#yourlocation').html(city + ',' + state);
        }

        $('#temp3').parent().removeClass('hide');
    } else {
        alert('Please enter a value City & State');
    }

    //empty input fiels
    $('#city').val('');
    $('#state').val('');
});
