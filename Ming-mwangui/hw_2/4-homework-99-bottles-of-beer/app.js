/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

var string1 = "bottles of beer on the wall,";
var string2 = "bottles of beer.";
var string3 = "Take one down and pass it around,";
var string4 = "bottles of beer on the wall.";
var string5 = "No more";
var string6 = "Go to the store and buy some more";

function printResult () {
    for (var i = 99; i > 0; i-- ) {
        if (i == 99) {
            x = i;
        }
        var msg1 = i + " " + string1 + " " + i + " " + string2;
        var msg2 = string3 + " " + i + " " + string4;
        // console.log(msg1);
        // console.log(msg2);
        var oNewP = document.createElement("p");
        var oText = document.createTextNode(msg1 + msg2);
        oNewP.appendChild(oText);
        document.body.appendChild(oNewP);
    }
        var msg3 = string5 + " " + string1 + " " + string5 + " " + string2;
        var msg4 = " " + string6 + " " + x + " " + string4;
        var oNewP2 = document.createElement("p");
        var oText2 = document.createTextNode(msg3 + msg4);
        oNewP2.appendChild(oText2);
        document.body.appendChild(oNewP2);
};

printResult();

// 99 bottles of beer on the wall, 99 bottles of beer.
//     Take one down and pass it around, 98 bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
//     Go to the store and buy some more, 99 bottles of beer on the wall.