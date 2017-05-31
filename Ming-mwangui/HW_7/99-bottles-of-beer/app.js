/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/
var bottle = "bottle";
var bottles = "bottles";
var beer = "of beer";
var onTheWall = "on the wall";
var takeOne = "Take one down and pass it around,";
var beerOnWall = "of beer on the wall.";
var noMore = "no more";
var buy = "Go to the store and buy some more";

// 99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.
var paragraph1 = 'bottles of beer on the wall, ';
var paragraph2 = 'bottles of beer. Take one down and pass it around, ';
var paragraph3 = 'bottles of beer on the wall.';


function printResult () {
    for (var i = 99; i > 0; i-- ) {
        var msg1 = i + " " + string1 +  " " + string2 + " " + string3 + ", " + i  + " " + string1 +  " " + string2 + ". ";
        var msg2 = string4 +  " " + (i-1) + " " +string1 + " " + string2 + " " + string3 +  ". ";

        if (i == 1) {
            var msg1 = i + " " + string0 +  " " + string2 + " " + string3 + ", " + i  + " " + string0 +  " " + string2 + ". ";
            var msg2 = string4 +  " " + (i-1) + " " +string0 + " " + string2 + " " + string3 +  ". ";
        };
        var oNewP = document.createElement("p");
        var oText = document.createTextNode(msg1 + " " + msg2);
        oNewP.appendChild(oText);
        document.body.appendChild(oNewP);
        console.log(msg1 + " " + msg2);
    }
        var msg3 = string7 + " " + string1 + " " + string2 + " " + string3 + "," + " " + string6 + " " + string1 +" " + string2 + ".";
        var msg4 = " " + string7 + ", " + x + " " + string1 + " " + string2 + " " + string3 +  ". ";
        var oNewP2 = document.createElement("p");
        var oText2 = document.createTextNode(msg3 + " " + msg4);
        oNewP2.appendChild(oText2);
        document.body.appendChild(oNewP2);
        console.log(msg3 + msg4);
};

printResult();

// 99 bottles of beer on the wall, 99 bottles of beer.
//     Take one down and pass it around, 98 bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
//     Go to the store and buy some more, 99 bottles of beer on the wall.