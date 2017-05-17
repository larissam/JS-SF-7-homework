/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var streetnum = [];
streetnum.push("1234");
streetnum.push("4321");
streetnum.push("611");
streetnum.push("314");
streetnum.push("8130");

var streetname = [];
streetname.push("funky drive");
streetname.push("playstation lane");
streetname.push("traveling circle");
streetname.push("lifts heavey street");
streetname.push("street fighter street");

var city = [];
city.push("Willy Wonka");
city.push("Bettle Juice");
city.push("Goonies");
city.push("Great Outdoors");
city.push("Ghostbuster");

var state = [];
state.push("CA");
state.push("VA");
state.push("WA");
state.push("NV");
state.push("NY");

var zip = [];
zip.push("11111");
zip.push("22222");
zip.push("33333");
zip.push("44444");
zip.push("55555");

var temp = "";

temp += streetnum[Math.floor(Math.random() * streetnum.length - 1) + 1];
temp += " " + streetname[Math.floor(Math.random() * streetname.length - 1) + 1];
temp += ", " + city[Math.floor(Math.random() * city.length - 1) + 1];
temp += " " + state[Math.floor(Math.random() * state.length - 1) + 1];
temp += ", " + zip[Math.floor(Math.random() * zip.length - 1) + 1];

console.log(temp);