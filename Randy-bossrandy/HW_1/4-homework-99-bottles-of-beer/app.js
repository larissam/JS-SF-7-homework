/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

//***Go ahead and try any start or end number (even negatives).
var startBottles = -99;
var endBottles = 1;

//***Replacement for number is double-pound (##).
var lyrics = [];
lyrics.push("## bottles of beer on the wall, ## bottles of beer.");
lyrics.push("Take one down and pass it around, ## bottles of beer on the wall.");
lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
lyrics.push("Go to the store and buy some more, ## bottles of beer on the wall.");

//***Change "Bottles" to singlular.
var bottleReplace = function (input) {
    return input.replace(/bottles/g, 'bottle');
}

var i = startBottles;
do {
    var temp = lyrics[1]; //***Default lyric 2.

    //***Replace depending on bottles left.
    if ((i - 1) === 1) {
        temp = bottleReplace(temp);
    }
    else if (i === 1) {
        lyrics[0] = bottleReplace(lyrics[0])

        temp = temp.replace('##', 'no more');

        if (startBottles > 1)
            lyrics[3] = bottleReplace(lyrics[3])
    }

    //***Replace and output lyric 1.
    console.log(lyrics[0].replace(/##/g, i));

    //***Replace and output lyric 2. Handle negatives.
    if (i > 0)
        console.log(temp.replace(/##/g, (i - 1)));

    i--; //***Minus 1 start bottle count.
} while (i >= 1)

//***Replace and output lyric 3.
console.log(lyrics[2]);

//***Replace and output lyric 4. Handle negatives.
if (i >= 0)
    console.log(lyrics[3].replace(/##/g, startBottles))