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

var person = (function(personName,personAge) {
   var kids = [];
   
   return {
   getKids: function (kidsList){
     console.log(kids);
   },
   
   haveKid: function (oneMoreMouth){
     this.kids++;
	 console.log("Congrats!")
   },

   getPersonName: function (getName){
	 console.log(personName);
   },

   getPersonAge: function (getAge){
	 console.log(personAge);
   },

   addYear: function(birthday){
		  this.personAge++;
		  console.log("Happy Birthday!")
   }
  
 }
})('Joey',23);


person.getKids();
person.haveKid();
person.getPersonName();
person.getPersonAge();
person.addYear();