/* Work with a partner to create objects for three different monkeys (called monkey1, monkey2, monkey3), each with the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(food)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Choose which partner will initially take the pair programming role of driver and who will be the observer. 
Switch roles after creating the first object, then again after creating the second. 
Also be sure each partner takes a turn in each role during the exercise steps below.

Exercise your monkeys by retrieving their properties and using their methods. 
Practice using both syntaxes for retrieving properties (dot notation and brackets).

*/

function Monkey() {
	this.name = "";
	this.species = "";
	this.foodsEaten = [];

	this.eatSomething = function (food) {
		this.foodsEaten.push(food);
	}

	this.introduce = function () {
		console.log("Hi, my name is " + this.name + " I'm a " + this.species + " type of monkey and I eat " + this.foodsEaten);
	}

}

var M1 = new Monkey;
M1.name = "Bobo";
M1.species = "Chimp";
M1.eatSomething("Nuts");
M1.eatSomething("Banana");

var M2 = new Monkey;
M2.name = "George";
M2.species = "Gorilla";
M2.eatSomething("Watermellon");
M2.eatSomething("Honey");

var M3 = new Monkey;
M3.name = "Dudley";
M3.species = "Orangatang";
M3.eatSomething("Grapes");
M3.eatSomething("Cherries");

M1.introduce();
M2.introduce();
M3.introduce();


