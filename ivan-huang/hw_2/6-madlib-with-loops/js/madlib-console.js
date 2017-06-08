var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


// Create function

function changeNewStartup() { 
    console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    var getH1 = document.getElementById("xForY");
    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));
    getH1.innerHTML='A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];   
}


/*
click button
Generate text
appending to DOM
Display text: A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]

*/