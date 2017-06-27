/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park


// Answer Starts Here

// 'Task Tracker'
// Description: a browser-based calendar app that helps you keep track of your tasks.
// Every 'task' has
// - a title: commute, homework
// - a description: bus, exercises
// - a start date: month, day, year, time
// - an end date: month, day, year, time
// Every 'task' can
// - start: true, false
// - end: true, false
// - track percentage complete: number between 0-100
// - be assigned: teammate 1, teammate 2, teammate 3

// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address
  
  // var pet_owner;


// Answer Starts Here

var pet_owner = {
  name: "Thomas Anderson",
  address: "567 Cole Street, San Francisco CA 94117"
};

// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

  // var some_pet;


// Answer Starts Here

var some_pet = {
  name: "Rocky",
  species: "Canis lupus familiaris",
  breed: "Boston Terrier",
  noise: "arf",

  makeNoise: function (){
    console.log(this.name + " says" + this.noise);
  }

};

// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
