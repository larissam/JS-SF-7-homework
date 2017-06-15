/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.

2) Follow the steps in your pseudocode to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* round decimal
* generate another random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie
* get the first die by ID and update the CSS class name to secondDie

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.

*/
window.onload = function() {
};

function randomizeDice() {
  var max = 6;
  var min = 1;

  var random1 = Math.random() * (max - min) + min;
  var random2 = Math.random() * (max - min) + min;

  random1 = Math.round(random1);
  random2 = Math.round(random2);

  var firstDie = 'dice-' + random1;
  var secondDie = 'dice-' + random2;

  var firstDieElement = document.getElementById('first-die');
  var secondDieElement = document.getElementById('second-die');

  firstDieElement.removeAttribute("class");
  secondDieElement.removeAttribute("class");

  firstDieElement.className = "dice " + firstDie;
  secondDieElement.className = "dice " + secondDie;

  console.log("random1 " + random1);
  console.log("random2 " + random2);
}
