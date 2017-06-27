/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal.
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).

  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.

  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else).
*/

/*
// Starter code
*/

// var song = document.createElement('ul');
// document.body.append(song);
// for (var i = 99; i > 0; i--) {
//     var verse = document.createElement('li');
//     if(i > 1) {
//         verse.innerHTML = i + " bottles of beer on the wall, " + i + " bottles of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.";
//     } else {
//         verse.innerHTML = i + " bottle of beer on the wall, " + i + " bottle of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.";
//     }
//     song.appendChild(verse);
// }


// create new ul element
var $song = $('<ul>');
// attach new element to bottom of body
$('body').append($song);
// for loop conditional
for (var i = 99; i > 0; i--) {
// creat new li element
  var $verse = $('<li>');
// conditional statement
// (i > 1) is the condition
  if(i == 2) {
    // change the condition to i==2 because it's the 2nd to last line
    $verse.html(i + " bottles of beer on the wall, " + i + " bottles of beer, you take one down, pass it around, " + (i - 1) + " bottle of beer on the wall.");

  } else if (i > 1){
    // insert text (expression) into the li element
    $verse.html(i + " bottles of beer on the wall, " + i + " bottles of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.");

  } else {
    // insert text (expression) into the li element - last line
    $verse.html(i + " bottle of beer on the wall, " + i + " bottle of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.");
  }
  // add the li to the bottom of the ul
  $song.append($verse);

}
