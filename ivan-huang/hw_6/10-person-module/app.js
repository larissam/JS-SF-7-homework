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


/*
Create a function (using a function statement) that does the following:
		- Accepts two parameters, for the person's name and their age
		- Declares a variable named 'kids', which is an empty array
*/
var kids = function(name, age) {
	var kidsArray = {};

	function theKid() {
		return {
			name: '',
			age: 0
		};
	}
	function getKid(x, y) {
		var newKid = theKid()
		newKid.name = x;
		newKid.age = y;

		kidsArray.push(newKid);
	}

	getKid(name, age);

	

	
//			- Returns an object with the following methods:

return {

//			- a method get the list of kids

	kidsList: function() {
		kidsList.forEach( function(a, b) {
			console.log((b+1) + ' ' + a.name + ' ' + a.age);
		}
		) 
	},

//			- a method to have a new kid

	makeBaby: function(n, m) {
		getKid(n, m);

	},


//			- a method to get the person's name

	getName: function(numKid) {
		if (kids.length === 0 || numKid > (kids.length) || numKid <= 0)
		
	}

//			- a method to get the person's age

	getAge: function() {

	}

//			- a method to celebrate the person's birthday (make then a year older)

	celebrateBirthday: function() {

	}

}

//	2. Convert the function to an IIFE, being sure to pass arguments for the parameters











};

