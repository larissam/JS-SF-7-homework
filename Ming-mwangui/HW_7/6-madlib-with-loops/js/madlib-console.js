//variable for array
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Amazon', 'Nike', 'BMW', 'IBM', 'Burberry', 'Samsung' ];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest', 'Macys', 'Dollar Tree', 'Panny', 'Coca Cola'];
var newFavoriteList = [];

//variable for display string
var displayArea = document.getElementById('xForY');

//variable for buttons
var createNewStratupBtn = document.getElementById('create');
var favoriteBtn = document.getElementById('save');

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

    if(displayArea.hasChildNodes()) {
        displayArea.removeChild(displayArea.childNodes[0]);
    }
    displayArea.appendChild(newRandomString);
    newFavoriteList.push(newRandomString);
    //return newRandomString;
    console.log(newFavoriteList);
};

createNewStratupBtn.addEventListener('click', function () {
    generator();
});

function saveFavoriteList(newRandomString) {
   // var saveGeneratorToList = new generator();
    console.log('newRandomString');
    console.log("2 saveGeneratorToList: ", saveGeneratorToList);
};

favoriteBtn.addEventListener('click',function () {
    saveFavoriteList();

    //newFavoriteList
    //saveFavoriteList();
});






