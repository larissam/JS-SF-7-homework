var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));


var createButton = document.getElementById("create");
createButton.onclick = function (event) {
	event.preventDefault();
	var heading = document.querySelector("h1");
	var headingText = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
   heading.appendChild(headingText);
   document.body.appendChild(heading);
}