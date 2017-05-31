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
  // 'Calender'
  // Description: What makes up a calender.
  // Every 'calender' has
  // - day of week (Sun-Sat)
  // - array of holidays
  // - array of months (Jan-Dec)
  // - array of days count for each month
  // - boolean is leap year
  // Every 'calender' can
  // - display year view
  // - display month view
  // - display week view

  // 'Calender Event'
  // Description: Each event on calender.
  // Every 'calender event' has
  // - date
  // - time start
  // - time end
  // - event title
  // - event description
  // Every 'calender event' can
  // - create new
  // - save
  // - delete

  // 'Calender Event Alarm'
  // Description: Each event can have an alarm.
  // Every 'calender event' has
  // - event ID
  // - alarm number value
  // - alarm number type (mins, hours, days)
  // - alarm type (vibrate, ring, ring/vibrate)
  // Every 'calender Event Alarm' can
  // - Add New
  // - Save
  // - Delete
// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address



// Answer Starts Here
var pet_owner = {
    name: "Bob",
    address: "123 Main Street"
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



// Answer Starts Here
var some_pet = {
    name: "Mango",
    species: "Cat",
    breed: "short-hair",
    noise: "meow"
};
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
