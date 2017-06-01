/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = [3421, 5346, 867, 89, 4, 5543];
var streetName = ['Bush', 'Pine', 'Ellis', '4th', '5th Ave', 'Mission'];
var cityNam = ['San Francisco', 'San Jose', 'Pleasanton', 'Dublin', 'Los Angeles'];
var stateName = ['CA', 'NY', 'AZ', 'TX', 'AK', 'GA'];
var zipCode = ['94113', '10087', '34000', '29301', '57320', '34921'];
var items = [streetNumber, streetName, cityNam, stateName, zipCode];

window.onload = function generateAddress() {
    var newArray = [];
    items.forEach(function (element, index) {
        var rand = element[Math.floor(Math.random() * element.length)];
        newArray = newArray.concat(rand);
    });
    console.log(newArray[0] + " " + newArray[1] + " st, " + newArray[2] + " " + newArray[3] + ", " + newArray[4]);

    /* forEach function coming from this idea:
    var rand1 = streetNumber[Math.floor(Math.random() * streetNumber.length)];
    var rand2 = streetName[Math.floor(Math.random() * streetName.length)];
    var rand3 = cityNam[Math.floor(Math.random() * cityNam.length)];
    var rand4 = stateName[Math.floor(Math.random() * stateName.length)];
    var rand5 = zipCode[Math.floor(Math.random() * zipCode.length)];
    console.log(rand1 + " " + rand2 + " street, " + rand3 + " " + rand4 + ", " + rand5);
    */
};