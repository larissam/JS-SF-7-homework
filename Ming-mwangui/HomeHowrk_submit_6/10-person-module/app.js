/*
	Build a module that creates a person by completing the following steps:
	1. Create a function (using a function statement) that does the following:
		- Accepts two parameters, for the person's name and their age
		- Declares a variable named 'kids', which is an empty array
		- Returns an object with the following methods:
			- a method get the list of kids
			- a method to have a new kid
			- a method to get the person's name
			- a method to get the person's age
			- a method to celebrate the person's birthday (make then a year older)
	2. Convert the function to an IIFE, being sure to pass arguments for the parameters
	3. Write statements that test all of your module's methods and verify that they all work as expected.
*/


var car = (function(kind) {
    var fuel = 2;
    this.kind = kind;

    return {
        start: function () {
            if (fuel === 0) {
                console.log('out of gas');
            } else {
                console.log('started and ready to go');
            }
        },

        drive: function () {
            if (fuel === 0) {
                console.log('Vroom!');
            } else {
                fuel--;
                console.log(fuel);
            }
        },
        refuel: function () {
            fuel = 2;
            console.log('the current fuel is: ', fuel );
        },
        getMake: function () {
            console.log(kind);
        },
        tradIn: function (newCar) { //not finish yet
            car(newCar);
            console.log(newCar);
        }
    };

// add code here to return methods that interact with private variables

})('Tesla');

car.start();
car.drive();
car.drive();
car.drive();
car.refuel();
car.getMake();




function dailOutList(name, time, subject) {
    this.name = name;
    this.time = time;
    this.subject = subject;
    this.vote = 0;
    this.respne = function (){
        this.vote++;
    };
}

var call = new dailOutList('Joy', 'evening', 'return car');
console.log(call);
