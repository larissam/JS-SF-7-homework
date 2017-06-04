//variable for strings
var singular = " bottle";
var plural = " bottles";
var paragraph1 = ' of beer on the wall, ';
var paragraph2 = ' of beer. Take one down and pass it around, ';
var paragraph3 = ' of beer on the wall.';
var paragraph4 = 'no more';
var finalLine1 = 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ';
var finalLine2 = ' bottles of beer on the wall.';

//variable for a new array to storage i, so I know the total leangth without hard code the number inside the code
var totalNum = [];

//variable for ul
var $ul = $('<ul></ul>');
$('body').append($ul);

function printResult () {
    for ( var i = 99; i > 0; i-- ) {
            var msg1 = i + plural + paragraph1 + i + plural + paragraph2 + (i-1) + plural + paragraph3;
            totalNum.push(i);
        if (i == 1) {
            var msg1 = i + singular + paragraph1 + i + singular + paragraph2 + paragraph4 + plural + paragraph3;
        };
        var $li = $("<li></li>");
        $li.append(msg1);
        $ul.append($li);
    }
        var $finalContainer = $("<li></li>", {'class': 'final'});
        var finalText = (finalLine1 + totalNum.length + finalLine2);
        $finalContainer.append(finalText);
        $ul.append($finalContainer);
};

printResult();

