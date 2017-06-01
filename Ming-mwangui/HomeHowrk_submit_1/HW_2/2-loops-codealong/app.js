/*
var input = 0;
while (input < 10) {
    input++;
    console.log(input);
}

var input = 0;
do {
    input++;
    console.log(input);
} while(input < 10);

var teams = ['cubs', 'Giants', 'Rockies', 'Mariners'];

for (var i = 0; i < teams.length; i++) {
    console.log(teams[i]);
}
*/

var teams = ['cubs', 'Giants', 'Rockies', 'Mariners'];
teams.forEach(function (element) {
    console.log(element);
});