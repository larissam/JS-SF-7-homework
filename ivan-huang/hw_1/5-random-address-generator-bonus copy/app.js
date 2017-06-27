/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = ["11", "22", "33"];
var streetName = ["Jason street", "Jason street", "Andy street"];
var cityName = ["Urguay", "Syria", "Iran"];
var stateName = ["CA", "NV", "NY"];
var zipCode = ["11111", "22222", "33333"];


var temp = "";

temp += streetNumber[Math.floor(Math.random() * streetNumber.length - 1) + 1];
temp += " " + streetName [Math.floor(Math.random() * streetName.length - 1) + 1];
temp += ", " + cityName[Math.floor(Math.random() * cityName.length - 1) + 1];
temp += " " + stateName[Math.floor(Math.random() * stateName.length - 1) + 1];
temp += ", " + zipCode[Math.floor(Math.random() * zipCode.length - 1) + 1];

console.log(temp);