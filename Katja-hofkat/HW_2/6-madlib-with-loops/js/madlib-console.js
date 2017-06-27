var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

//console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


var addContent = document.getElementById('create');

addContent.onclick = function() {
     var header = document.getElementById('XforY');
     var headerText = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
     header.appendChild(headerText);
     document.h1.appendChild(header);
  }

