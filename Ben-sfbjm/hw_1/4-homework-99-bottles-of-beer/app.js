/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/



/********************************************************************************************************/
/*** ATTEMPT 1: My solution that doesn't work. It just prints the actual function code to the console ***/
/********************************************************************************************************/

//Run decremeting loop to count down from the original number of 100.
var originalBottles = function(){
	for (i=100; i>=1; i--) {
		console.log(i);
	}
}

//Run decrementing loop to count down from 99. This will be the second value in each printed string.
var nextBottles = function(){
	for (i=99; i>=1; i--) {
		console.log(i);
	}
}

//Create function to concat song string calling the originalBottles and nextBottles functions.
var song = function() {
	console.log(originalBottles()+' '+'bottles of beer on the wall,'+' '+originalBottles()+' '+'bottles of beer. Take one down and pass it around,'+' '+nextBottles()+' '+'bottles of beer on the wall.');
}

//Call the song function.
song();



/***************************************************************************************************************/
/*** ATTEMPT 2: This works without the if statement. I'm not sure why this if statement is breaking the code ***/
/***************************************************************************************************************/

for (counter=99; counter>= 1; counter--) {
	var bottles = if (counter === 1){
		console.log('bottle');
	} else {
		console.log('bottles');
	}
	console.log(counter+' '+bottles+' '+'of beer on the wall,'+' '+counter+' '+bottles+' '+'of beer.');
	var counter2 = counter - 1;
	console.log('Take one down and pass it around,'+' '+counter2+' '+bottles+' '+'of beer on the wall.');
	console.log('');
}


/***************************************************************************************************/
/*** ATTEMPT 3: Declaring an unassigned variable outside of the function seemed to fix the issue ***/
/***************************************************************************************************/

var bottles;
for (counter=99; counter>= 1; counter--) {
	if (counter === 1){
		bottles = 'bottle';
	} else {
		bottles = 'bottles';
	}
	console.log(counter+' '+bottles+' '+'of beer on the wall,'+' '+counter+' '+bottles+' '+'of beer.');
	var counter2 = counter - 1;
	console.log('Take one down and pass it around,'+' '+counter2+' '+bottles+' '+'of beer on the wall.');
	console.log('');
}



















