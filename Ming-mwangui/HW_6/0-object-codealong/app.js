var myMotorcyle = {
    wheels: 2,
    color: "blue",
    maxSpeed: 150,
    owners: ["Terrence", "Mei-Ying"]
};

// 2 ways to convert objets to Json fomat
//JSON.stringify(myMotorcyle);
//var motorcyleString = JSON.stringify(myMotorcyle);


// to convert the JSON back to Object
//var motorcyleObject = JSON.parse(motorcyleString);



/*
var myHouse = {};

var myMotorcyle = {
  wheels: 2,
  color: "blue",
  maxSpeed: 150,
  owners: ["Terrence", "Mei-Ying"]
};

myHouse.window = 6;
myHouse.address = "1 market st, SF, CA, 94103";


myMotorcyle["color"] = "green";
myMotorcyle["maxSpeed"] = "220";


for (var prop in myHouse) {
    console.log(prop + " = " + myHouse[prop]);
}

myMotorcyle.accelerate = function(speed) {
    console.log("Accelerating to " + speed);
}
*/