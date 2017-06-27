/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = [2124, 9097, 3232, 8987, 5730, 9365, 4146]
var streetName = ["Maple Ave", "Oak Street", "Pine Lane", "Cottonwood Blvd", "Aspen Court"]
var cityName = ["Palm Springs", "Palm Beach", "Palm Desert", "Palm West"]
var stateName = ["CA", "CO", "NM", "WA", "OR"]
var zipCode = [90001, 90002, 90003, 90004, 90005, 90006, 90007, 90008, 90009]

var randomAddress = 
streetNumber[Math.floor(Math.random() * streetNumber.length)] + " " + 
streetName[Math.floor(Math.random() * streetName.length)] + ", " + 
cityName[Math.floor(Math.random() * cityName.length)] + " " + 
stateName[Math.floor(Math.random() * stateName.length)] + ", " + 
zipCode[Math.floor(Math.random() * zipCode.length)];
document.write(randomAddress);


// function name(parameters) { statement;
// }