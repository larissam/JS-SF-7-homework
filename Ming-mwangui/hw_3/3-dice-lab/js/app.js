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


// 1. defind each item
// 2. generate number for each of them with in 1- 6
// 3. Label both of them and show in the console
// 4. Show the total in console

(function dice() {
    var firstDie = Math.floor(Math.random() * 7);
    var secondDie = Math.floor(Math.random() * 7);

    console.log("firstDie: ", firstDie + ", " + "secondDie: ", secondDie);
    console.log("Total: : ", firstDie + secondDie);
})();





