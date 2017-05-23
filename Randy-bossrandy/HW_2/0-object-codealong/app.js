var myHouse = {};

myHouse.cost = 10000;
myHouse.type = "condo";

var myMotocycle = {
	color: "green",
	maxSpeed: 150
};

for (var prop in myHouse) {
	console.log(prop + " = " + myHouse[prop]);
}