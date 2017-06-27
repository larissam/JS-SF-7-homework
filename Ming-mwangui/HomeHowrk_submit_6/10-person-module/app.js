/*
 Build a module that creates a person by completing the following steps:
 1. Create a function (using a function statement) that does the following:
 - Accepts two parameters, for the person's name and their age
 - Declares a variable named 'kids', which is an empty array
 - Returns an object with the following methods:
 - a method get the list of kids // getKidsList
 - a method to have a new kid // addKids
 - a method to get the person's name // getName
 - a method to get the person's age // getAge
 - a method to celebrate the person's birthday (make then a year older) // celebrateBirthday
 2. Convert the function to an IIFE, being sure to pass arguments for the parameters
 3. Write statements that test all of your module's methods and verify that they all work as expected.
 */

var person = (function(name, age) {
  var kidslist = [];

  var info = {
  	name: name,
    age: age
	};
  kidslist.push(info);

	return {
        printList: function () {
            console.log('This is the list: ', kidslist);
        },
        addPerson: function (name, age) {
            var info = {
                name: name,
                age: age
            };
            kidslist.push(info);
        },
        getName: function () {
            for (var i = 0; i < kidslist.length; i++) {
                console.log('Name: '+ kidslist[i].name);
            }
        },
        getAge: function () {
            for (var i = 0; i < kidslist.length; i++) {
                console.log('Age: ' + kidslist[i].age);
            }
        },
        celebrateBirthday: function () {
            for (var i = 0; i < kidslist.length; i++) {
                kidslist[i].age++;
                console.log('Happy Birthday ' + kidslist[i].name + '!' + ' You are now ' + kidslist[i].age + ' years old.');
            }
        }
    }
})('John', 24);


person.printList();
person.addPerson('kevin', 20);
person.addPerson('Joe', 18);
person.addPerson('Mike', 48);
person.printList();
person.getName();
person.getAge();
person.celebrateBirthday();
