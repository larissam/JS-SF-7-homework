var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

var XforY = document.getElementById('XforY');
var inputs = document.getElementById('inputs');
var create = document.getElementById('create');
var save = document.getElementById('save');
var print = document.getElementById('print');
var favorites = document.getElementById('favorites');



function onClick() {
    var XforY_content = XforY.innerHTML;
    XforY.innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}
console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);



