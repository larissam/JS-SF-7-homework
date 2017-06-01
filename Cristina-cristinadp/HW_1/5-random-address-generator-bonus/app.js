/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = [2000, 2500, 4000, 267];
var streetName = ["Post", "Steiner", "Sutter", "Divisadero"];
var cityName = ["San Francisco", "Palo Alto", "Berkeley", "Oakland"];
var stateName = ["California", "Nevada", "Washington", "Florida"];
var zipCode = [48654, 94062, 56434, 91167];

var data = [streetNumber, streetName, cityName, stateName, zipCode];

var printAddress = function() {
	var randomAddress = new Array();

    // generate a new address
	data.forEach(function(element, index) {
		randomAddress[index] = element[Math.floor(Math.random() * element.length)];
	});

    // print formatted address
	console.log(randomAddress[0] + " " + 
			randomAddress[1] + ", " + 
			randomAddress[2] + " " + 
			randomAddress[3] + "," + 
			randomAddress[4]);
}

window.onload = printAddress;




// var random1 = streetNumber[Math.floor(Math.random() * streetNumber.length)];
// var random2 = streetName[Math.floor(Math.random() * streetName.length)];
// var random3 = cityName[Math.floor(Math.random() * cityName.length)];
// var random4 = stateName[Math.floor(Math.random() * stateName.length)];
// var random5 = zipCode[Math.floor(Math.random() * zipCode.length)];





