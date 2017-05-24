var monkey1 = {
    name: "JoJo",
    species: "Gelada",
    foodsEaten: []
};
var monkey2 = {
    name: "KiKi",
    species: "Lesula",
    foodsEaten: []
};
var monkey3 = {
    name: "Mini",
    species: "Pygmy-marmoset",
    foodsEaten: []
};


monkey1.introduce = function () {
    console.log("My name is " + monkey1.name
        + "my species is " + monkey1.species
        + "I have eaten " +   monkey1.foodsEaten
     );
};

monkey1.eatSomething = function(item){
    monkey1.foodsEaten.push(item)
};





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

