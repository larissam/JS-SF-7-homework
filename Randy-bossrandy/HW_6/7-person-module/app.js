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

var kids = function (name, age) {
    var kidlist = [];

     function Kid() {
        return {
            name: '',
            age: 0
        };
    }

    function constructor(n, a) {
        var newkid = Kid();
        newkid.name = n;
        newkid.age = a;

        kidlist.push(newkid);
     }

    constructor(name, age);

    return {
        list_kids: function () {
            kidlist.forEach(function (elm, idx) {
                console.log('#' + (idx + 1) + ' ' + elm.name + ': ' + elm.age);
            });
        },

        add_kid: function (n, a) {
            constructor(n, a);
        },

        birthday: function (name) {
            var found = false;

            kidlist.forEach(function (elm) {
                if (elm.name.toUpperCase() === name.toUpperCase()) {
                    elm.age++;
                    found = true;
                    console.log('Happy Birthday ' + elm.name + ' you are now ' + elm.age + 'yrs old.');
                }
            });

            if (found === false)
                console.log('Kid ' + name + ' not found. Have more kids.');
        },

        get_age: function (kidnum) {
            if (kidlist.length === 0 || kidnum > (kidlist.length) || kidnum <= 0)
                return;

            console.log('Age: ' + kidlist[kidnum - 1].age);
        },

        get_name: function (kidnum) {
            if (kidlist.length === 0 || kidnum > (kidlist.length) || kidnum <= 0)
                return;

            console.log('Name: ' + kidlist[kidnum - 1].name);
        }
    };

}('mike', 4);

console.log('List kids');
kids.list_kids();

//***Adding kids.
console.log('');
console.log('Add kids and list');
kids.add_kid('joe', 5);
kids.add_kid('mary', 9);
kids.add_kid('tom', 6);
kids.list_kids();

//***Birthday.
console.log('');
console.log('Joe\'s birthday and list kids again');
kids.birthday('joe');
kids.list_kids();

//***Display.
console.log('');
console.log('Display name and age of kid #2');
kids.get_name(2);
kids.get_age(2);
