/*

Creating a page where every time the page is loaded, the console logs random values for two dice. 

1) Write down pseudocode for the program described below.

2) Follow the steps in your pseudocode to write the code for your function.
* generate a random number between 1 - 6 and store to a variable, firstDie
* generate a random number between 1 - 6 and store to a variable, secondDie
* log the values of the first and second dice to the console, labeling each value
* log the total of the two dice to the console, with a label

3) Create a statement that runs the function you created whenever the page loads.
  (Hint: Reference when the page loads with the code window.onload, and set its value to the name of the function you created, without parentheses.)

*/

function dieRolling () {
	
	var firstDie = Math.floor((Math.random() * 6) + 1);
	var secondDie = Math.floor((Math.random() * 6) + 1);
	console.log('This is the first die value:' +' '+ firstDie);
	console.log('This is the second die value:' +' '+ secondDie);

	var total = firstDie + secondDie;
	console.log('This is the total of both die:' +' '+ total);
}

window.onload = dieRolling();
