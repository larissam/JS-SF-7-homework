
var addContent = document.getElementById('add-content');

//window.onload = function() {
addContent.onclick = function () {
    var mainHeading = document.createElement('h1');
    var headingText = document.createTextNode('DOM Manipulation');
    mainHeading.appendChild(headingText);
    document.body.appendChild(mainHeading);
};

window.onload = function () {
    addContent.className = 'button-branding';
}