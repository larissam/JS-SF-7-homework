/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice.
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.
   - variable for array, container, button, flag
   - method for random image
   - match the random number with images in the storage
   - create nodes
   - add the image url into the src
   - append images to the DOM
   - check the flag
   - button click event

2) Follow the steps in your pseudocode to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate another random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie
* get the first die by ID and update the CSS class name to secondDie

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.

*/

//variable for array
var imageStorage = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png'];

//variable for Container
var firstDiceContainer = document.getElementById('first-die');
var secondDiceContainer = document.getElementById('second-die');
var displayTotal = document.getElementById('content');



//variable for button
var rollBtn = document.getElementById('roll-dice');

//flag image is already exit or not
var imageLoad = false;

function rollDice(){
  //method for random image
  var random1 = Math.floor((Math.random() * imageStorage.length));
  var random2 = Math.floor((Math.random() * imageStorage.length));

  var firstValue = random1 + 1;
  var secondValue = random2 + 1;
  var total = firstValue + secondValue;
  console.log(firstValue, secondValue, total);

  //match the random number with images in the storage
  var firstDice = imageStorage[random1];
  var secondDice = imageStorage[random2];

  //create nodes
  var firstDomImg = document.createElement("img");
  var secondDomImg = document.createElement("img");

  //add the image url into the src
  firstDomImg.src = firstDice;
  secondDomImg.src = secondDice;

  if(firstDiceContainer.hasChildNodes()) {
    firstDiceContainer.removeChild(firstDiceContainer.lastChild);
    secondDiceContainer.removeChild(secondDiceContainer.lastChild);
  }

  firstDiceContainer.appendChild(firstDomImg);
  secondDiceContainer.appendChild(secondDomImg);

    //textTag.removeChild(textNode);
    //displayTotal.removeChild(textTag);

};

rollBtn.addEventListener('click', function () {
  rollDice();
});


// count totall number
var textTag = document.createElement("span");
textTag.setAttribute('id','total');
var textNode = document.createTextNode(firstValue + secondValue);
textTag.appendChild(textNode);
//console.log(textTag.appendChild(textNode));
displayTotal.appendChild(textTag);

