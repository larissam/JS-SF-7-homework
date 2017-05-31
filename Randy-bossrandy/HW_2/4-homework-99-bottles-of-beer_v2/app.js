/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

//***Change "Bottles" to singlular.
function bottleReplace(input) {
    return input.replace(/bottles/g, 'bottle');
}

function printLyric(bottlesLeft, startBottle) {
    //***Replacement for number is double-pound (##).
    var lyrics = [];
    lyrics.push("## bottles of beer on the wall, ## bottles of beer.");
    lyrics.push("Take one down and pass it around, ## bottles of beer on the wall.");
    lyrics.push("No more bottles of beer on the wall, no more bottles of beer.");
    lyrics.push("Go to the store and buy some more, ## bottles of beer on the wall.");

    var temp = lyrics[1]; //***Default lyric 2.

    //***Replace depending on bottles left.
    if ((bottlesLeft - 1) === 1) {
        temp = bottleReplace(temp);
    }
    else if (bottlesLeft === 1) {
        lyrics[0] = bottleReplace(lyrics[0])

        temp = temp.replace('##', 'no more');

        if (bottlesLeft > 1)
            lyrics[3] = bottleReplace(lyrics[3])
    }

    //***Find the list element.
    var lyricList = document.getElementById("ulLyrics");

    //***Replace and output lyric 2. Handle negatives.
    if (bottlesLeft > 0) {
        //***Replace and output lyric 1.
        //console.log(lyrics[0].replace(/##/g, bottlesLeft));
        var lyricsLine = document.createElement("li");
        lyricsLine.innerHTML = lyrics[0].replace(/##/g, bottlesLeft);
        lyricList.appendChild(lyricsLine);

        //console.log(temp.replace(/##/g, (bottlesLeft - 1)));
        var lyricsLine = document.createElement("li");
        lyricsLine.innerHTML = temp.replace(/##/g, (bottlesLeft - 1));
        lyricList.appendChild(lyricsLine);
    }

    //***Replace and output lyric 3,4.
    if (bottlesLeft === 0) {
        //console.log(lyrics[2]);
        var lyricsLine = document.createElement("li");
        lyricsLine.innerHTML = lyrics[2];
        lyricList.appendChild(lyricsLine);

        //console.log(lyrics[3].replace(/##/g, startBottles));
        var lyricsLine = document.createElement("li");
        lyricsLine.innerHTML = lyrics[3].replace(/##/g, startBottle);
        lyricList.appendChild(lyricsLine);
    }

}

//***Run when the document is loaded.
window.onload = function () {

    //***Go ahead and try any start or end number (even negatives).
    var startBottles = 99;
    var endBottles = 1;

    var i = startBottles;
    do {
        printLyric(i, startBottles);
        i--;
    } while (i >= 0)
    
}