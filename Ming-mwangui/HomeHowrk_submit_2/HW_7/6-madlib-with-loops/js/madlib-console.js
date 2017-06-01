//variable for array
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Amazon', 'Nike', 'BMW', 'IBM', 'Burberry', 'Samsung' ];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Macys', 'Dollar Tree', 'Panny', 'Coca Cola', 'Polycom', 'Kombucha', 'Kleenex', 'Kirkland'];
var newFavoriteList = [];

//variable for display string
var displayGenerator = document.getElementById('xForY');
var displayFavorites = document.getElementById('favorites');

//variable for buttons
var createNewStratupBtn = document.getElementById('create');
var favoriteBtn = document.getElementById('save');
var printBtn = document.getElementById('print');

//flags
favoriteBtn.disabled = true;
printBtn.disabled = true;
favoriteBtn.classList.add('disabled');
printBtn.classList.add('disabled');

var randomString = function () {
    //random method
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    var generatorNewStratup = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.';
    var result = document.createTextNode(generatorNewStratup);
    //console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    return result;
};

function generator() {
    //to get the result from other function
    var newRandomString = new randomString();
    //check if node already been attach, if yes, need to remove it before add on
    if(displayGenerator.hasChildNodes()) {
        displayGenerator.removeChild(displayGenerator.childNodes[0]);
    }
    displayGenerator.appendChild(newRandomString);
    return newRandomString;
};

createNewStratupBtn.addEventListener('click', function () {
    generator();
    favoriteBtn.disabled = false;
    favoriteBtn.classList.remove('disabled');
});

function saveFavoriteList() {
    //when click and then push the currently into a new array
    var currentString = displayGenerator.innerHTML;
    newFavoriteList.push(currentString);
    favoriteBtn.disabled = true;
    favoriteBtn.classList.add('disabled');
    printBtn.disabled = false;
    printBtn.classList.remove('disabled');
};

favoriteBtn.addEventListener('click',function () {
    saveFavoriteList();
});

function printFavorites() {
    if(displayFavorites.hasChildNodes()) {
        displayFavorites.innerHTML = '';
    }
    var printOutput = '';
    for (i = 0; i < newFavoriteList.length ; i++) {
        printOutput = (i+1) + ": " + newFavoriteList[i];
        var textTag = document.createElement("p");
        var textNode = document.createTextNode(printOutput);
        textTag.appendChild(textNode);
        displayFavorites.appendChild(textTag);
    }
};

printBtn.addEventListener('click', function () {
    printFavorites();
});



