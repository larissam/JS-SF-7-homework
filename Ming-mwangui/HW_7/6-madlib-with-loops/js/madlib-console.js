//variable for array
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Amazon', 'Nike', 'BMW', 'IBM', 'Burberry', 'Samsung' ];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Macys', 'Dollar Tree', 'Panny', 'Coca Cola'];
var newFavoriteList = [];

//variable for display string
var displayGenerator = document.getElementById('xForY');
var displayFavorites = document.getElementById('favorites');

//variable for buttons
var createNewStratupBtn = document.getElementById('create');
var favoriteBtn = document.getElementById('save');
var printBtn = document.getElementById('print');

//init
favoriteBtn.disabled = true;
printBtn.disabled = true;

var randomString = function () {
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    var generatorNewStratup = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2] + '.';
    var result = document.createTextNode(generatorNewStratup);
    //console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    return result;
};

function generator() {
    var newRandomString = new randomString();
    if(displayGenerator.hasChildNodes()) {
        displayGenerator.removeChild(displayGenerator.childNodes[0]);
    }
    displayGenerator.appendChild(newRandomString);
    return newRandomString;
};

createNewStratupBtn.addEventListener('click', function () {
    generator();
    favoriteBtn.disabled = false;
    //console.log(newFavoriteList.length );
});

function saveFavoriteList() {
    var currentString = displayGenerator.innerHTML;
    //console.log('currentString', currentString);
    newFavoriteList.push(currentString);
    // console.log('newFavoriteList: ', newFavoriteList);
    // console.log('Total for newFavoriteList: ', newFavoriteList.length );
    favoriteBtn.disabled = true;
    printBtn.disabled = false;
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



