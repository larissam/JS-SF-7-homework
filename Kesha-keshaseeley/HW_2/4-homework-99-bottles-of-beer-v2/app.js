/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

/*
// Pseudo code
// Start program

Get number of bottles, start 99
Add lyrics " bottles of beer on the wall, "
Get number of bottles, start 99
Add lyrics " bottles of beer.\n Take one down and pass it around, "
Get number of bottles minus 1
Add lyrics " bottles of beer on the wall."
Repeat loop until number of bottles is equal to 1

// End program
*/


var bottles;

for (var i = 99; i >= 0; i = i - 1) {

	if (i === 1) {
		bottles = "bottle"
	} else {
		bottles = "bottles"
	}

	console.log(i + " " + bottles + " of beer on the wall, " + i + " " + bottles + " of beer.");
	console.log("Take one down and pass it around,");

	if (i < 1) {
		console.log("No more bottles of beer on the wall!");
	} else {
		console.log((i-1) + " " + bottles + " of beer on the wall!");
	}
}

// var list = document.createElement('ul');
// var item1 = document.createElement('li');
// var item2 = document.createElement('li');
// var text1 = document.createTextNode(i + " " + bottles + " of beer on the wall, " + i + " " + bottles + " of beer.");
// var text2 = document.createTextNode("Take one down and pass it around,");



function myFunction() {
	var list = document.createElement('ul');
	var item1 = document.createElement('li');
	var item2 = document.createElement('li');
	var text1 = document.createTextNode(i + " " + bottles + " of beer on the wall, " + i + " " + bottles + " of beer.");
	var text2 = document.createTextNode("Take one down and pass it around,");
	item1.appendChild(text1);
	item2.appendChild(text2);
	list.appendChild(item1);
	list.appendChild(item2);
	// document.appendChild(list);
	console.log('test')
}



