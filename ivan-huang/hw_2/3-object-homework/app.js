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

//'Calendar'
//'Description: Our app manages events and tasks in one's calendar.
// Every 'Calendar' has
// - Months
// - Years
// - Days
// - Holidays
// - Day of Week
// Every 'Calendar' can
// - Show Date
// - Show Month
// - Show Year
// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address
/*
var pet_owner = new Object();

// Answer Starts Here

pet_owner.name = "stacy anderson",
pet_owner.address = "55 Uganda St.",
pet_owner.phoneNumber = "4157778727",
pet_owner.emailAddress = "stacyanderson2@aol.com"
// Answer Ends Here
*/

var pet_owner = {
  name: "stacy anderson",
  address: "55 Uganda St.",
  phoneNumber: "4157771234",
  emailAddress: "stacyanderson2@aol.com"
};

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


// Answer Starts Here
var some_pet = {
  name: "Rover",
  species: "wild dog",
  breed: "wild dawg",
  noise: "Arfffff"
};
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
