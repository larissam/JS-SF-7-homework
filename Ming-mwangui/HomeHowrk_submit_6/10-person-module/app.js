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
  console.log('kidslist: ', kidslist);


  function constructor(name, age) {
  	this.name = name;
  	this.age = age;
	};

	return {
		printList: function () {
      console.log('kidslist: ', kidslist);
    },
    addPerson: function (name, age) {
      var info = {
        name: name,
        age: age
      };
      kidslist.push(info);
      console.log('kidslist: ', kidslist);
      console.log('kidslist: ', typeof(kidslist));
    },
		getName: function () {
			for(var i = 0 ; i < kidslist.length; i++ ) {
				console.log(kidslist[i].name);
			}
    },
    getAge: function () {
      for(var i = 0 ; i < kidslist.length; i++ ) {
        console.log(kidslist[i].age);
      }
    },
    celebrateBirthday: function () {
      for(var i = 0 ; i < kidslist.length; i++ ) {
        kidslist[i].age ++;
      	console.log(kidslist[i].age);
      }
    }
	}
})('Tesla', 34);


person.printList();
person.addPerson('kevin', 20);
person.getName();
person.getAge();
person.celebrateBirthday();


//
// var car = (function(kind) {
//     var fuel = 2;
//     this.kind = kind;
//
//     return {
//         start: function () {
//             if (fuel === 0) {
//                 console.log('out of gas');
//             } else {
//                 console.log('started and ready to go');
//             }
//         },
//
//       function constructor(n, a) {
//             var newkid = Kid();
//             newkid.name = n;
//             newkid.age = a;
//
//               kidlist.push(newkid);
//          }
//
//       constructor(name, age);
//
//         return {
//             list_kids: function () {
//                 kidlist.forEach(function (elm, idx) {
//                       console.log('#' + (idx + 1) + ' ' + elm.name + ': ' + elm.age);
//                   });
//             },
//
//             add_kid: function (n, a) {
//                 constructor(n, a);
//             },
//
//             birthday: function (name) {
//                 var found = false;
//
//                   kidlist.forEach(function (elm) {
//                         if (elm.name.toUpperCase() === name.toUpperCase()) {
//                               elm.age++;
//                               found = true;
//                               console.log('Happy Birthday ' + elm.name + ' you are now ' + elm.age + 'yrs old.');
//                           }
//                     });
//
//                   if (found === false)
//                       console.log('Kid ' + name + ' not found. Have more kids.');
//             },
//
//             get_age: function (kidnum) {
//                 if (kids.length === 0 || kidnum > (kids.length) || kidnum <= 0)
//                       return;
//
//                   console.log('Age: ' + kidlist[kidnum - 1].age);
//            },
//
//             get_name: function (kidnum) {
//                 if (kids.length === 0 || kidnum > (kids.length) || kidnum <= 0)
//                       return;
//
//                   console.log('Name: ' + kidlist[kidnum - 1].name);
//             }
//       };
//
//     }('mike', 4);
//
//   console.log('List kids');
// kids.list_kids();
//
//   //***Adding kids.
//     console.log('');
// console.log('Add kids and list');
// kids.add_kid('joe', 5);
// kids.add_kid('mary', 9);
// kids.add_kid('tom', 6);
// kids.list_kids();
//
//   //***Birthday.
//     console.log('');
// console.log('Joe\'s birthday and list kids again');
// kids.birthday('joe');
// kids.list_kids();
//
//   //***Display.
//     console.log('');
// console.log('Display name and age of kid #2');
// kids.get_name(2);
// kids.get_age(2);

//
// var car = (function(kind) {
//     var fuel = 2;
//     this.kind = kind;
//
//     return {
//         start: function () {
//             if (fuel === 0) {
//                 console.log('out of gas');
//             } else {
//                 console.log('started and ready to go');
//             }
//         },
//
//         drive: function () {
//             if (fuel === 0) {
//                 console.log('Vroom!');
//             } else {
//                 fuel--;
//                 console.log(fuel);
//             }
//         },
//         refuel: function () {
//             fuel = 2;
//             console.log('the current fuel is: ', fuel );
//         },
//         getMake: function () {
//             console.log(kind);
//         },
//         tradIn: function (newCar) { //not finish yet
//             car(newCar);
//             console.log(newCar);
//         }
//     };
//
// // add code here to return methods that interact with private variables
//
// })('Tesla');
// //
// car.start();
// car.drive();
// car.drive();
// car.drive();
// car.refuel();
// car.getMake();
//
//
//
//
// function dailOutList(name, time, subject) {
//     this.name = name;
//     this.time = time;
//     this.subject = subject;
//     this.vote = 0;
//     this.respne = function (){
//         this.vote++;
//     };
// }
//
// var call = new dailOutList('Joy', 'evening', 'return car');
// console.log(call);
