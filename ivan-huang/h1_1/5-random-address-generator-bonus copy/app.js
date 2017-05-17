/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = [];
streetNumber.push("11");
streetNumber.push("22");
streetNumber.push("33");


var streetName = [];
streetName.push("Jason street");
streetName.push("Andy street");
streetName.push("Freddy street");


var cityName = [];
cityName.push("Urguay");
cityName.push("Syria");
cityName.push("Iran");


var stateName = [];
stateName.push("CA");
stateName.push("NV");
stateName.push("NY");


var zipCode = [];
zipCode.push("11111")
zipCode.push("22222")
zipCode.push("33333")

var temp = "";

temp += streetNumber[Math.floor(Math.random() * streetNumber.length - 1) + 1];
temp += " " + streetName [Math.floor(Math.random() * streetName.length - 1) + 1];
temp += ", " + cityName[Math.floor(Math.random() * cityName.length - 1) + 1];
temp += " " + stateName[Math.floor(Math.random() * stateName.length - 1) + 1];
temp += ", " + zipCode[Math.floor(Math.random() * zipCode.length - 1) + 1];

console.log(temp);