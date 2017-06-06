//***
// NOTE: html was pointing to "app.js" instead of this file. changed to: '<script src="js/madlib-console.js"></script>'
//***

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var favs = [];          //***Hold favorite madlibs.
var temp = '';          //***Hold random madlib text.
var favsadded = false;  //***Prevent dumpicate favorites.

create.onclick = function () {
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    temp = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    //console.log(temp);

    var hdr = document.getElementById('xForY');
    hdr.innerHTML = temp;

    favsadded = false;
}

save.onclick = function () {
    if (temp.length > 0 && favsadded === false)
        favs.push(temp);

    favsadded = true;
}

showfav.onclick = function () {
    //****
    // had to change 'print' button to showfav. the event was not firing.
    //***

    if (favs.length === 0)
        return;

    var fv = document.getElementById('favorites');
    fv.innerHTML = "";

    favs.forEach(function(elm, idx) {
        fv.innerHTML += elm + "<br>";
    });

    
}